const ejemplo = [

    {
        id: "1",
        name: "hola",
        otrovalor: "otro"
    },
    {
        id:"2",
        name: "hola",
        otrovalor: "otro"
    },
    {
        id:"3",
        name: "hola",
        otrovalor: "otro"
    }
] 
    
    function cambiarValor(id, name, valor) {
        let miarray = ejemplo.filter((item, idex)=> {item.id === id});
        miarray[0][name] = valor
        enviar(miarray[0])
    }
        
    
    [
        {
            id: "1",
            name: "hola",
            otrovalor: "otro"
        }
    ]