let smiley = document.getElementById('face')

const initialState = {
    face: ""
}

const myReducer = (state = initialState, action) => {
    const copyOfState = {...state};

    if(action.type === "HAPPY") {
        copyOfState.face = action.value
        smiley.innerHTML = copyOfState.face
    }
    if(action.type === "SAD") {
        copyOfState.face = action.value
        smiley.innerHTML = copyOfState.face
    }
    if(action.type === "ANGRY") {
        copyOfState.face = action.value
        smiley.innerHTML = copyOfState.face
    }
    if(action.type === "CONFUSED") {
        copyOfState.face = action.value
        smiley.innerHTML = copyOfState.face
    }
    return copyOfState
}

const store = Redux.createStore(myReducer)


document.addEventListener("click" , function(e) {
    if(e.target.id == "happy") store.dispatch({type: "HAPPY", value: "(◕‿◕✿)"})
    if(e.target.id == "sad") store.dispatch({type: "SAD", value: "(￣ｰ￣)"})
    if(e.target.id == "angry") store.dispatch({type: "ANGRY", value: "( ́ ◕◞ε◟◕`)" })
    if(e.target.id == "confused") store.dispatch({type: "CONFUSED", value: "╰(◡‿◡✿╰)"})
})
