import { useLocation } from "react-router-dom"


function Motion () {
    const location = useLocation();
    const id = location.pathname.match(/^\/proj\/(\d+)$/)?.[1] || "4";

    console.log(id)
    const colorSchemes = {
        1: ["#26282B", "#3a528a", "#4d6cb2", "#5F85DB", "#d3e4ff", "#e5eff8", "#000000"],
        2: ["#0b0b0b", "#1e1e1e", "#3b383f", "#67835d", "#92c181", "#a5d294", "#000000" ],
        3: ["#3d3d3d", "#464646", "#747474", "#8b8b8b", "#a9a9a9", "#FFFFFF",  "#000000"],
        4: ["#e6a157", "#e79b52", "#e8954d", "#e98f49", "#ea8945", "#eb8242", "#e7a55e"]
    };

    const scheme = colorSchemes[id] || colorSchemes[4];

    return (
        <svg 
            viewBox="0 0 900 600" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" version="1.1"
            className="fixed -z-10 transition-colors duration-700"
        >
            <rect width="100%" height="100%" fill={scheme[6]} />
            <path className="animate-wave1" d="M0 150L18.8 149.2C37.7 148.3 75.3 146.7 112.8 136.5C150.3 126.3 187.7 107.7 225.2 117.7C262.7 127.7 300.3 166.3 337.8 170.2C375.3 174 412.7 143 450.2 124.8C487.7 106.7 525.3 101.3 562.8 102C600.3 102.7 637.7 109.3 675.2 121.8C712.7 134.3 750.3 152.7 787.8 157.8C825.3 163 862.7 155 881.3 151L900 147L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[0]}></path>
            <path className="animate-wave2" d="M0 224L18.8 210.7C37.7 197.3 75.3 170.7 112.8 162C150.3 153.3 187.7 162.7 225.2 183C262.7 203.3 300.3 234.7 337.8 228.2C375.3 221.7 412.7 177.3 450.2 165.5C487.7 153.7 525.3 174.3 562.8 197.5C600.3 220.7 637.7 246.3 675.2 250.2C712.7 254 750.3 236 787.8 232.3C825.3 228.7 862.7 239.3 881.3 244.7L900 250L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[1]}></path>
            <path className="animate-wave3" d="M0 280L18.8 279.3C37.7 278.7 75.3 277.3 112.8 278.8C150.3 280.3 187.7 284.7 225.2 291.3C262.7 298 300.3 307 337.8 303.5C375.3 300 412.7 284 450.2 271.2C487.7 258.3 525.3 248.7 562.8 239.8C600.3 231 637.7 223 675.2 232.2C712.7 241.3 750.3 267.7 787.8 272.2C825.3 276.7 862.7 259.3 881.3 250.7L900 242L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[2]}></path>
            <path className="animate-wave4" d="M0 418L18.8 418.2C37.7 418.3 75.3 418.7 112.8 416.3C150.3 414 187.7 409 225.2 394.8C262.7 380.7 300.3 357.3 337.8 353.5C375.3 349.7 412.7 365.3 450.2 370C487.7 374.7 525.3 368.3 562.8 365.3C600.3 362.3 637.7 362.7 675.2 363C712.7 363.3 750.3 363.7 787.8 353.5C825.3 343.3 862.7 322.7 881.3 312.3L900 302L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[3]}></path>
            <path className="animate-wave5" d="M0 412L18.8 420.2C37.7 428.3 75.3 444.7 112.8 444.5C150.3 444.3 187.7 427.7 225.2 423.7C262.7 419.7 300.3 428.3 337.8 432.8C375.3 437.3 412.7 437.7 450.2 441.7C487.7 445.7 525.3 453.3 562.8 457.5C600.3 461.7 637.7 462.3 675.2 450.8C712.7 439.3 750.3 415.7 787.8 412C825.3 408.3 862.7 424.7 881.3 432.8L900 441L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[4]}></path>
            <path className="animate-wave6" d="M0 502L18.8 509.2C37.7 516.3 75.3 530.7 112.8 538.5C150.3 546.3 187.7 547.7 225.2 550.8C262.7 554 300.3 559 337.8 551C375.3 543 412.7 522 450.2 510.5C487.7 499 525.3 497 562.8 496.5C600.3 496 637.7 497 675.2 504.8C712.7 512.7 750.3 527.3 787.8 536.2C825.3 545 862.7 548 881.3 549.5L900 551L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill={scheme[5]}></path>
        </svg>
    )
}

export default Motion