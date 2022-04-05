x=document.getElementById("vardi").innerHTML
m = x.split(' ')
m[9] = "<span style=\"color:red\">" + m[10] + "</span>"
y = m.join(" ")
document.getElementById("vardi").innerHTML = y
