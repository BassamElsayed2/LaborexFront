import supabase from "./supabase";

export interface news {
  title_ar: string;
  title_en: string;
  content_ar: string;
  content_en: string;
  images?: string[];
  yt_code?: string;
  created_at?: string;
  id?: string;
  user_id?: string;
}

export async function getNews() {
  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    console.error("فشل في جلب الخدمات:", error.message);
    throw new Error("فشل في تحميل الخدمات");
  }

  return data;
}

export async function getNewsById(id: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  if (!data) throw new Error("الخدمة غير موجود");

  return data;
}
