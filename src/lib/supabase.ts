
import { createClient } from '@supabase/supabase-js'

// Lovable automatically provides these environment variables 
// when you connect your Supabase project in the editor.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // This error will appear if Supabase is not connected.
  // Click the Supabase button in the top right of the Lovable editor to connect.
  throw new Error("Supabase credentials are not set. Please connect your Supabase project.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
