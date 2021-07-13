const tasks = [
    {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'College Discussion Meet',
        day: 'Feb 6th at 7:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Shopping at the Mall',
        day: 'Feb 8th at 6:30pm',
        reminder: false
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
