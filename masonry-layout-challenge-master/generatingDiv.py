listHeight = [59, 143, 157, 59, 35, 143, 75, 35, 143, 85, 140, 110, 100, 200, 190, 130, 200, 50, 180, 65, 120, 60, 110, 120]
print(len(listHeight))
listgen = [x for x in range(24)]
newlist = []
for el in listgen:
    newlist += chr(el + 65)
print(len(listgen))
print(newlist)
boxHtml = open("boxHtml.txt", "w")
for el in newlist:
    boxHtml.write("<div id='{}'></div>\n".format(el))
boxHtml.close()

boxCSS = open("boxCSS", "w")
index= 0
for el in newlist:
    boxCSS.write("#{}".format(el) + "{ height : " + "{}; width : 100; float: left".format(listHeight[index]) + "}\n")
    index += 1
boxCSS.close()