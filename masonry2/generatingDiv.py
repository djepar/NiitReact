listHeight = [59, 143, 157, 59, 35, 143, 75, 35, 143, 85, 140, 110, 100, 200, 190, 130, 200, 50, 180, 65, 120, 60, 110, 120]
print(len(listHeight))


boxHtml = open("boxHtml2.txt", "w")
counter = 0
boxHtml.write("<div id='container'>\n")
for i in range(1,25):
    if (i-1) % 4 == 0:
        counter += 1
        boxHtml.write("<div class='cls col'>\n")
        boxHtml.write("\t<nav class='cls col{}' id='row{}'>{}</nav>\n".format(counter,i, i))
    else:
        boxHtml.write("\t<nav class='cls col{}' id='row{}'>{}</nav>\n".format(counter,i, i))
    if (i-1) % 4 == 3:
        boxHtml.write("</div>\n")
boxHtml.write("</div>")
boxHtml.close()

boxCSS = open("boxCSS2.txt", "w")
boxCSS.write("container { \n display : float; \n border : 2px solid black;\n\t}\n")
boxCSS.write("nav .cls { \n display : float; \n width : 100px; \n border : 2px solid black;\n\t}\n")

for i in range(1,25):
    boxCSS.write("#row{}".format(i) + "{ height : " + "{}px; ".format(listHeight[i-1]) + "}\n")
boxCSS.close()