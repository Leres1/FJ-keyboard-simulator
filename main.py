import eel
import sqlite3

eel.init('web')

@eel.expose
def getTextForLevel(lvl_id, lang):
    curcor = sqlite3.connect('lvl.bd').cursor()
    curcor.execute(f"SELECT {lang}_Level FROM level WHERE id={lvl_id}")
    elem = curcor.fetchall().__str__()
    return elem[3:len(elem)-5]

eel.start('main.html', size=(1920, 1080))
