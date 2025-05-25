const size = paraseInt(process.argv[2])
if (isNaN(size)) {
}else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
        // console.log("X".repeat(size)); 
    }
    }