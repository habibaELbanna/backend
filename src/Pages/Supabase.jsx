
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hfoafculjqidpxxqzlcw.supabase.co'
const supabaseKey ='sb_publishable_RcLKfi-rE-24_JoLFqGGEQ_Cnrh889D'
export const supabase = createClient(supabaseUrl, supabaseKey)