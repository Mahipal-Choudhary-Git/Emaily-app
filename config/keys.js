const module = async () => {
    if (process.env.NODE_ENV === "production") {
        return await import("./prod.js");
    } else {
        return await import("./dev.js");
    }
};

export default (await module()).default;
