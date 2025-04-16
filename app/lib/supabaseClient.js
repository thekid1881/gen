import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "postgresql://postgres:dtrO2PGaWYiv43SE@db.vgczuksajovqoogudcky.supabase.co:5432/postgres";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY3p1a3Nham92cW9vZ3VkY2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNDg4MzIsImV4cCI6MjA1OTgyNDgzMn0.-N_w93ELCV9QERxbCl9Xr2z455oSwdlHqECOK_V40zk"
const supabaseDb = createClient(supabaseUrl, supabaseKey);

export default supabaseDb;