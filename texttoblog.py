import re

string=open("post.txt").read()

string= string.decode("utf-8")
string= string.replace(u"\u2018", "\"").replace(u"\u2019", "\'").replace(u"\u201c","\"").replace(u"\u201d", "\"")
print string