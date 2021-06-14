import eel
import sqlite3

eel.init('web')

@eel.expose
def getTextForLevel(lvl_id, lang):
    curcor = sqlite3.connect('lvl.bd').cursor()
    curcor.execute(f"SELECT {lang}_Level FROM level WHERE id={lvl_id}")
    return curcor.fetchall()[0][0]

@eel.expose
def getLangs():
    curcor = sqlite3.connect('keys.bd').cursor()
    curcor.execute(f"PRAGMA table_info(keys);")
    mas = []
    for i in curcor.fetchall()[1:]:
        mas += [i[1]];
    return mas

eel.start('main.html', cmdline_args=['--start-fullscreen'])