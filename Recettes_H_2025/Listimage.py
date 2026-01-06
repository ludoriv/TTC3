import os ; os.chdir("C:/Comm2025/TTC_site/Site_TTCnew/Recettes_Hélène_2025")# 
# Dossier contenant les images
dossier_images = "Fpdf"

# Tableau contenant les noms des fichiers .jpg
Photo = [f for f in os.listdir(dossier_images) if f.lower().endswith('.pdf')]

# Affichage
print(Photo)