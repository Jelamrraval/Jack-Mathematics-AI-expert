const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const voiceBtn = document.getElementById("voiceBtn");
const inputForm = document.getElementById("inputForm");
const typingIndicator = document.getElementById("typingIndicator");
const eraseBtn = document.getElementById("eraseBtn");

const WELCOME_MSG = `
Yo, I'm Jack.<br><br>
I'm your math buddy. Drop a calculation like
<b>"What is 25 × 4?"</b>,
<b>"sin 45 + cos 45"</b>,
or <b>"sqrt(16)"</b>
and we'll lock it in.
`;

const HYPE_PHRASES = [
    "Clean one.",
    "Easy dub.",
    "We're locked in.",
    "Big brain move.",
    "That's so valid.",
    "Absolute W.",
    "Smooth like butter.",
    "You seriously cooked here.",
    "No cap, that's correct.",
    "That's a clean result.",
    "Pure cinema.",
    "Main character energy.",
    "Math wizardry right there.",
    "You understood the assignment.",
    "Pure aura.",
    "Too easy for the chat.",
    "Ok, nice.",
    "Got it.",
    "Sounds good.",
    "Cool.",
    "Alright, bet.",
    "Fair enough."
];

function randomHype() {
    return HYPE_PHRASES[
        Math.floor(Math.random() * HYPE_PHRASES.length)
    ];
}

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendMessage();
});

eraseBtn.addEventListener("click", () => {
    chatBox.innerHTML = "";
    appendMessage(WELCOME_MSG, "bot-msg");
});

function sendMessage() {
    const text = userInput.value.trim();

    if (!text) return;

    appendMessage(
        escapeHtml(text),
        "user-msg"
    );

    userInput.value = "";
    userInput.focus();

    typingIndicator.hidden = false;

    setTimeout(() => {
        typingIndicator.hidden = true;

        const response = getBotResponse(
            text.toLowerCase()
        );

        appendMessage(
            response,
            "bot-msg"
        );
    }, 600);
}

function getBotResponse(input) {

    const cleanText = input.trim();

    if (/^(hi|hello|hey|heyy|yo|sup)$/.test(cleanText)) {
        return `
            Yo! What's good?<br>
            Jack is online and locked in. What are we solving today?
        `;
    }
    

    if (
    /\bclock it\b/.test(cleanText) ||
    /\bclocked\b/.test(cleanText) ||
    /\bclock this\b/.test(cleanText)
) {
    return `
        <b>CLOCKED IT. thanks bro</b><br><br>
    `;
}


    if (/^good morning$/.test(cleanText)) {
        return `
            Good morning! We're locked in early.<br>
            What problems are we destroying today?
        `;
    }

    if (/^good afternoon$/.test(cleanText)) {
        return `
            Good afternoon! Jack's online.<br>
            Drop a math problem and let's get that W.
        `;
    }

    if (/^good evening$/.test(cleanText)) {
        return `
            Good evening. Night grind mode activated.<br>
            What are we calculating?
        `;
    }

    if (/^good night$/.test(cleanText)) {
        return `
            Good night! Catch you on the flip side.
        `;
    }

    if (/^(ok|okay|nice|cool|alright|sweet|awesome|great|sounds good)$/.test(cleanText)) {
        return `
            Alright, bet. Hit me with the next one whenever you're ready.
        `;
    }

    if (
        input.includes("who are you") ||
        input.includes("what are you")
    ) {
        return `
            I'm <b>Jack</b> — your ultimate math buddy.<br><br>
            I solve arithmetic, powers, roots,
            trigonometry, modulo, and raw expressions right here in the browser.
        `;
    }

    if (
        input.includes("what can you do") ||
        input.includes("what do you do") ||
        input === "help" ||
        input.includes("help me")
    ) {
        return `
            ${randomHype()}<br><br>
            Here is my full arsenal:<br><br>
            • Addition, subtraction, multiplication & division<br>
            • Powers like <b>2^5</b><br>
            • Square roots like <b>sqrt(16)</b> or <b>√16</b><br>
            • Trigonometry like <b>sin(30)</b><br>
            • Secant, cosecant, and cotangent<br>
            • Modulo like <b>45 % 26</b><br>
            • Mathematical constant <b>π</b><br>
            • Natural language math<br>
            • Voice-based questions
        `;
    }

    if (/bye|goodbye|see you|see ya/.test(input)) {
        return `
            ${randomHype()}<br>
            Catch you later! Peace out.
        `;
    }

    if (/thank you|thanks|thx/.test(input)) {
        return `
            Anytime! Jack's always got your back.
        `;
    }

    if (
        input.includes("how are you") ||
        input.includes("how are u")
    ) {
        return `
            I'm thriving and fully locked in.<br>
            Hit me with a problem.
        `;
    }

    if (
        input.includes("who made you") ||
        input.includes("who created you")
    ) {
        return `
            I'm a pure JavaScript math chatbot running entirely on browser vibes with zero extra API baggage.
        `;
    }

    try {

        let mathInput = input
            .replace(
                /what\s+is\s+the\s+/gi,
                ""
            )
            .replace(
                /what\s+is\s+/gi,
                ""
            )
            .replace(
                /what's\s+/gi,
                ""
            )
            .replace(
                /calculate\s+the\s+/gi,
                ""
            )
            .replace(
                /calculate\s+/gi,
                ""
            )
            .replace(
                /solve\s+for\s+/gi,
                ""
            )
            .replace(
                /solve\s+/gi,
                ""
            )
            .replace(
                /find\s+the\s+/gi,
                ""
            )
            .replace(
                /find\s+/gi,
                ""
            )
            .replace(
                /evaluate\s+/gi,
                ""
            )
            .replace(
                /result\s+of\s+/gi,
                ""
            )
            .replace(
                /answer\s+of\s+/gi,
                ""
            )
            .replace(
                /please\s+/gi,
                ""
            )
            .replace(
                /equals?/gi,
                ""
            )
            .replace(
                /equal\s+to/gi,
                ""
            )
            .replace(
                /×/g,
                "*"
            )
            .replace(
                /÷/g,
                "/"
            )
            .replace(
                /−/g,
                "-"
            )
            .replace(
                /√/g,
                "sqrt"
            )
            .replace(
                /π/g,
                "pi"
            )
            .replace(
                /multiplied\s+by/gi,
                "*"
            )
            .replace(
                /multiply\s+by/gi,
                "*"
            )
            .replace(
                /times/gi,
                "*"
            )
            .replace(
                /divided\s+by/gi,
                "/"
            )
            .replace(
                /divide\s+by/gi,
                "/"
            )
            .replace(
                /plus/gi,
                "+"
            )
            .replace(
                /minus/gi,
                "-"
            )
            .replace(
                /to\s+the\s+power\s+of/gi,
                "^"
            )
            .replace(
                /raised\s+to/gi,
                "^"
            )
            .replace(
                /modulo/gi,
                "%"
            )
            .replace(
                /\bmod\b/gi,
                "%"
            )
            .replace(
                /square\s+root\s+of/gi,
                "sqrt"
            )
            .replace(
                /square\s+root/gi,
                "sqrt"
            )
            .replace(
                /root\s+of/gi,
                "sqrt"
            )
            .replace(
                /sine\s+of/gi,
                "sin"
            )
            .replace(
                /cosine\s+of/gi,
                "cos"
            )
            .replace(
                /tangent\s+of/gi,
                "tan"
            )
            .replace(
                /sine/gi,
                "sin"
            )
            .replace(
                /cosine/gi,
                "cos"
            )
            .replace(
                /tangent/gi,
                "tan"
            )
            .replace(
                /cotangent/gi,
                "cot"
            )
            .replace(
                /cosecant/gi,
                "cosec"
            )
            .replace(
                /secant/gi,
                "sec"
            )
            .replace(
                /\?/g,
                ""
            )
            .trim();

        if (/^-?\d+(\.\d+)?$/.test(mathInput)) {
            return `
                Got it — <span class="answer">${mathInput}</span>.<br>
                What's the play with this number?
            `;
        }

        if (/^[+*/%]\s*-?\d+(\.\d+)?$/.test(mathInput)) {
            return `
                I see <span class="answer">${mathInput}</span>,
                but that's only half the equation.<br>
                Drop the full expression so we can cook.
            `;
        }

        const result = performMath(mathInput);

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        return `
            ${randomHype()}<br><br>
            <span class="answer">${result}</span>
        `;

    } catch (error) {

        return `
            Oof, couldn't parse that one.<br><br>
            Try formatting it like this:<br>
            • <b>25 × 4</b><br>
            • <b>sqrt(16)</b><br>
            • <b>√16</b><br>
            • <b>square root of 25</b><br>
            • <b>sin(30)</b><br>
            • <b>cos(60)</b><br>
            • <b>tan(45)</b><br>
            • <b>sin 45 + cos 45</b><br>
            • <b>what is sin 45 plus cos 45</b><br>
            • <b>2sin(30)</b><br>
            • <b>sin²(30)</b><br>
            • <b>2^5</b><br>
            • <b>45 % 26</b>
        `;
    }
}

function performMath(input) {

    let formula = input
        .toLowerCase()
        .trim();

    formula = formula
        .replace(/\s+/g, " ")
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-")
        .replace(/√/g, "sqrt")
        .replace(/π/g, "pi");

    formula = convertSuperscripts(formula);

    formula = formula
        .replace(
            /square\s+root\s+of/gi,
            "sqrt"
        )
        .replace(
            /square\s+root/gi,
            "sqrt"
        )
        .replace(
            /root\s+of/gi,
            "sqrt"
        )
        .replace(
            /sine\s+of/gi,
            "sin"
        )
        .replace(
            /cosine\s+of/gi,
            "cos"
        )
        .replace(
            /tangent\s+of/gi,
            "tan"
        )
        .replace(
            /sine/gi,
            "sin"
        )
        .replace(
            /cosine/gi,
            "cos"
        )
        .replace(
            /tangent/gi,
            "tan"
        )
        .replace(
            /cotangent/gi,
            "cot"
        )
        .replace(
            /cosecant/gi,
            "cosec"
        )
        .replace(
            /secant/gi,
            "sec"
        )
        .replace(
            /multiplied\s+by/gi,
            "*"
        )
        .replace(
            /multiply\s+by/gi,
            "*"
        )
        .replace(
            /times/gi,
            "*"
        )
        .replace(
            /divided\s+by/gi,
            "/"
        )
        .replace(
            /divide\s+by/gi,
            "/"
        )
        .replace(
            /plus/gi,
            "+"
        )
        .replace(
            /minus/gi,
            "-"
        )
        .replace(
            /to\s+the\s+power\s+of/gi,
            "^"
        )
        .replace(
            /raised\s+to/gi,
            "^"
        )
        .replace(
            /modulo/gi,
            "%"
        )
        .replace(
            /\bmod\b/gi,
            "%"
        )
        .trim();

    formula = formula.replace(
        /\bpi\b/g,
        "Math.PI"
    );

    formula = formula.replace(
        /(\d|\))\s*(?=(sin|cos|tan|sec|cosec|csc|cot|sqrt)\b)/g,
        "$1*"
    );

    formula = formula.replace(
        /(\d|\))\s*(?=\()/g,
        "$1*"
    );

    formula = formula.replace(
        /(\))\s*(?=\d)/g,
        "$1*"
    );

    formula = convertFunctions(formula);

    formula = formula.replace(
        /\^/g,
        "**"
    );

    formula = formula.replace(
        /Math\.PI/g,
        "Math.PI"
    );

    if (
        !/^[0-9+\-*/%.(),\sA-Za-z]*$/.test(formula)
    ) {
        throw new Error("Unsafe expression");
    }

    const remainingWords = formula
        .replace(
            /Math\.(PI|sqrt|sin|cos|tan|abs|floor|ceil|round)/g,
            ""
        )
        .replace(
            /[0-9+\-*/%.(),\s]/g,
            ""
        );

    if (remainingWords.length > 0) {
        throw new Error("Invalid expression");
    }

    const result = Function(
        "'use strict'; return (" + formula + ")"
    )();

    if (!Number.isFinite(result)) {
        throw new Error("Invalid result");
    }

    return Number.isInteger(result)
        ? result
        : parseFloat(result.toFixed(6));
}

function convertFunctions(formula) {

    formula = formula.replace(
        /\b(sin|cos|tan|sec|cosec|csc|cot)\^(\d+)\(([^()]*)\)/g,
        function(match, func, power, value) {

            let converted;

            if (func === "sin") {
                converted =
                    `Math.sin(Math.PI/180*(${value}))`;
            }
            else if (func === "cos") {
                converted =
                    `Math.cos(Math.PI/180*(${value}))`;
            }
            else if (func === "tan") {
                converted =
                    `Math.tan(Math.PI/180*(${value}))`;
            }
            else if (func === "sec") {
                converted =
                    `1/Math.cos(Math.PI/180*(${value}))`;
            }
            else if (
                func === "cosec" ||
                func === "csc"
            ) {
                converted =
                    `1/Math.sin(Math.PI/180*(${value}))`;
            }
            else if (func === "cot") {
                converted =
                    `1/Math.tan(Math.PI/180*(${value}))`;
            }

            return `(${converted})**${power}`;
        }
    );

    formula = formula.replace(
        /\bsqrt\s*\(([^()]*)\)/g,
        "Math.sqrt($1)"
    );

    formula = formula.replace(
        /\bsqrt\s*(\d+(?:\.\d+)?)/g,
        "Math.sqrt($1)"
    );

    formula = formula.replace(
        /\bsin\s*\(([^()]*)\)/g,
        "Math.sin(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bsin\s*(\d+(?:\.\d+)?)/g,
        "Math.sin(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bcos\s*\(([^()]*)\)/g,
        "Math.cos(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bcos\s*(\d+(?:\.\d+)?)/g,
        "Math.cos(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\btan\s*\(([^()]*)\)/g,
        "Math.tan(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\btan\s*(\d+(?:\.\d+)?)/g,
        "Math.tan(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bsec\s*\(([^()]*)\)/g,
        "1/Math.cos(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bsec\s*(\d+(?:\.\d+)?)/g,
        "1/Math.cos(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\b(?:cosec|csc)\s*\(([^()]*)\)/g,
        "1/Math.sin(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\b(?:cosec|csc)\s*(\d+(?:\.\d+)?)/g,
        "1/Math.sin(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bcot\s*\(([^()]*)\)/g,
        "1/Math.tan(Math.PI/180*($1))"
    );

    formula = formula.replace(
        /\bcot\s*(\d+(?:\.\d+)?)/g,
        "1/Math.tan(Math.PI/180*($1))"
    );

    return formula;
}

function convertSuperscripts(text) {

    const superscriptMap = {
        "⁰": "0",
        "¹": "1",
        "²": "2",
        "³": "3",
        "⁴": "4",
        "⁵": "5",
        "⁶": "6",
        "⁷": "7",
        "⁸": "8",
        "⁹": "9"
    };

    text = text.replace(
        /(sin|cos|tan|sec|cosec|csc|cot)\s*([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/gi,
        function(match, func, power) {

            let normalPower = "";

            for (const char of power) {
                normalPower +=
                    superscriptMap[char] || char;
            }

            return func + "^" + normalPower;
        }
    );

    text = text.replace(
        /([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,
        function(match) {

            let normal = "";

            for (const char of match) {
                normal +=
                    superscriptMap[char] || char;
            }

            return "^" + normal;
        }
    );

    return text;
}

function appendMessage(text, className) {

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        `message ${className}`;

    messageDiv.innerHTML = text;

    chatBox.appendChild(
        messageDiv
    );

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}

voiceBtn.addEventListener(
    "click",
    startVoice
);

function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert(
            "Voice input isn't supported in this browser, bestie."
        );
        return;
    }

    const recognition =
        new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {

        voiceBtn.classList.add(
            "listening"
        );

        userInput.placeholder =
            "Listening closely…";
    };

    recognition.onresult = (event) => {

        userInput.value =
            event.results[0][0].transcript;

        voiceBtn.classList.remove(
            "listening"
        );

        userInput.placeholder =
            "Write a problem on the board…";

        sendMessage();
    };

    recognition.onerror = () => {

        voiceBtn.classList.remove(
            "listening"
        );

        userInput.placeholder =
            "Write a problem on the board…";
    };

    recognition.onend = () => {

        voiceBtn.classList.remove(
            "listening"
        );

        userInput.placeholder =
            "Write a problem on the board…";
    };

    recognition.start();
}

if (chatBox.children.length === 0) {
    appendMessage(
        WELCOME_MSG,
        "bot-msg"
    );
}
