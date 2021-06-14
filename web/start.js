var allLang = [];

async function Start() {
    allLang = await eel.getLangs()();
    console.log(allLang);
}

Start();
