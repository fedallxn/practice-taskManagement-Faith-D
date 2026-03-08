//lol this is kind of my actual to-do list so enjoy!
const mockTasks = [
    {
        id: 1,
        title: "Clean up garden",
        details: {
            description: "Dig up and pull out old plants from last year, them top off boxes with fresh soil. Gather up gardening tools and organize plant buckets.",
            dueDate: "03/21/2026",
            priority: "High",
            completed: false
        }
    },
    {
       id: 2,
        title: "Beging indoor seeding",
        details: {
            description: `Fill small plant wells with soil and make shallow pockets. Drop 1-2 seeds (from veggie/fruit of choice) and cover with more soil.
            Water wells thoroughly, then cover with lid to simulate greenhouse. Repeat with other varieties that can't be dirently sown in garden box.`,
            dueDate: "03/08/2026",
            priority: "High",
            completed: false
        } 
    },
    {
        id: 3,
        title: "File taxes",
        details: {
            description: "Double check that all W2 info is accounted for. Login to TurboTax and enter corrent data in corresponding fields. Hopefully get a tax return!",
            dueDate: "04/15/2026",
            priority: "Medium",
            completed: false
        }
    },
    {
        id: 4,
        title: "Make an appoinment",
        details: {
            description: "Upon receiving dental and vision insurance, make appoinments for each. Research providers covered and distance from home before scheduling.",
            dueDate: null,
            priority: "Low",
            completed: false
        }
    },
    {
        id: 5,
        title: "Prepare for sister's arrival",
        details: {
            description: `Make sure living room is picked up and cushions are back on couch. Dishes that are in the sink should be rinsed and put into the dishwasher.
            Counters sould be wiped down and floors should be swept promptly afterwards. Light an insense!`,
            dueDate: "03/08/2026",
            priority: "High",
            completed: true
        }
    }
]

export default mockTasks;