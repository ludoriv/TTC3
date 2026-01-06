# import os ; os.chdir("C:/Comm2025/TTC_site/Site_TTCnew/2020_StGildas")# 
# Dossier contenant les images
dossier_images = "Sept_Dec_2020s"
import os
# Tableau contenant les noms des fichiers .jpg
Photo = [f for f in os.listdir(dossier_images) if f.lower().endswith('.jpg')]

# Affichage
print(Photo)
