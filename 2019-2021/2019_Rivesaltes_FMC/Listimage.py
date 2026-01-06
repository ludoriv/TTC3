import os ; os.chdir("C:/Comm2025/TTC_site/Site_TTCnew/2019_Rivesaltes")# 
# Dossier contenant les images
dossier_images = "images_2019_Rivesaltes"

# Tableau contenant les noms des fichiers .jpg
Photo = [f for f in os.listdir(dossier_images) if f.lower().endswith('.jpg')]

# Affichage
print(Photo)