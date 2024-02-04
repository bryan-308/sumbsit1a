const lastUp = document.querySelector(".lastUp");
lastUp.innerHTML = '<span class="material-symbols-outlined">history</span> Friday, Jan 26, 8:30 PM';

const announcement = {
    cc102: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Assignments: Seatwork 5 and Chapter Test \n Quiz# 3 \n Quiz #4", 
            status: "important",
            start: "2024-02-05T08:00:00",
            end: "2024-02-05T10:00:00"
        }
    /*  { 
            text: "", 
            status: "important",
            start: "2024-00-00T00:00:00",
            end: "2024-00-00T00:00:00"
        } */
    ],
    itnet02: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Laboratory 1", 
            status: "important", 
            start: "2024-02-05T13:00:00", 
            end: "2024-02-05T15:00:00"
        },
        { 
            text: "Quiz #3", 
            status: "important", 
            start: "2024-02-07T10:00:00", 
            end: "2024-02-07T12:00:00"
        }
    ],
    itws01: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Quiz #2", 
            status: "important", 
            start: "2024-02-05T10:00:00", 
            end: "2024-02-05T12:00:00"
        }
    ],
    ge01: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Quiz #2", 
            status: "important", 
            start: "2024-02-08T10:00:00", 
            end: "2024-02-08T13:00:00"
        }
    ],
    ge02: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Quiz", 
            status: "important", 
            start: "2024-02-06T14:00:00", 
            end: "2024-02-06T17:00:00"
        }
    ],
    fil2: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "", 
            status: "", 
            start: "", 
            end: ""
        }
    ],
    nstp2: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "Passing of Plastic Bottles", 
            status: "normal",
            start: "2024-02-17T09:00:00",
            end: "2024-02-17T11:00:00"
        }
    ],
    pathfit2: [
        { 
            text: "\n", 
            status: "" 
        },
        { 
            text: "", 
            status: "",
            start: "",
            end: ""
        }
    ]
};

/*

To add newline, type "\n"

status:
    normal
    important

date time format:
    yyyy-mm-ddThh:mm:ss

*/ 
