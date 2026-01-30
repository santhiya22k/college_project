import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

/* ======================
   SIGNUP API
====================== */
app.post('/auth/signup', async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        name,
        email,
        password: hashedPassword,
        role: 'student'
      }
    ])

  if (error) {
    return res.status(400).json({
      message: error.message
    })
  }

  res.json({
    message: 'Signup successful'
  })
})

/* ======================
   LOGIN API
====================== */
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body

  const { data: users } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (!users) {
    return res.status(400).json({ message: 'User not found' })
  }

  const match = await bcrypt.compare(password, users.password)

  if (!match) {
    return res.status(401).json({ message: 'Wrong password' })
  }

  const token = jwt.sign(
    {
      id: users.id,
      role: users.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  res.json({
    message: 'Login success',
    token,
    user: {
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role
    }
  })
})
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(5000, () => {
  console.log('✅ Backend running on http://localhost:5000')
})
