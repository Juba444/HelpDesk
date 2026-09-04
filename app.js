function Ticket(props){
    return(
    <article>
        <h2>{props.title}</h2>
        <p>Pokuj: {props.room}</p>
        <p>Priority: {props.priority}</p>
        <p>Status: {props.status}</p>
    </article>);
}
function app(){
    <main className="container">
        <Ticket
            title = "Problem z monitorem"
            room = "10"
            priority = "średni"
            status = "otwarte"
        />
        <Ticket
            title = "Drukarka robi brr"
            room = "20"
            priority = "średnie"
            status = "otwarte"
        />
    </main>
}

const root + ReactDOM.createROOM(
    document.querySelector("#root")
    
);
root.render(<App />);

const ticket = [
    {
        id: 1,
        title: "Problem z monitorem",
        room: "10",
        priority: "średni",
        status: "otwarte",
    },
    {
        id: 2,
        title: "Drukarka robi brr",
        room: "20",
        priority: "średnie",
        status: "otwarte",
    },
]