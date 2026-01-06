import os
import win32com.client

def convert_word_to_pdf(folder_path):
    word = win32com.client.Dispatch("Word.Application")
    word.Visible = False

    for filename in os.listdir(folder_path):
        if filename.endswith(".doc") or filename.endswith(".docx"):
            full_path = os.path.join(folder_path, filename)
            pdf_path = os.path.splitext(full_path)[0] + ".pdf"

            doc = word.Documents.Open(full_path)
            doc.SaveAs(pdf_path, FileFormat=17)  # 17 = wdFormatPDF
            doc.Close()
            print(f"Converted: {filename} -> {pdf_path}")

    word.Quit()

# Exemple d'utilisation
#convert_word_to_pdf("C:/Comm2025/TTC_site/Site_TTCnew/Recettes_HS_2025/Fdoc")
#⚠️ Nécessite Microsoft Word installé sur le système.
