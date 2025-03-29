
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pcjzezardzxqlucjhify.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjanplemFyZHp4cWx1Y2poaWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjE2ODYsImV4cCI6MjA1ODgzNzY4Nn0.WJLbCHblsH3oGqJYvCZoSTYnZlSmfgAsBqkcwOk0sko'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
