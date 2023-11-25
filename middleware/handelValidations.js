module.exports = (schema) => {
    return (req, res, next) => {
        try {
            if (!req || !req.body) {
                return res.status(400).json({ message: 'Bad Request: Request or request body is missing' });
            }

            let validateError = [];
            const checkMethods = ["body", "params", "query"];

            checkMethods.forEach((key) => {
                if (req[key] && schema[key]) {
                    const validationResults = schema[key].validate(req[key]);

                    if (validationResults.error) {
                        validateError.push(validationResults.error.details[0].message);
                    }
                }
            });

            if (validateError.length > 0) {
                res.status(400).json({ message: "ValidationError", errors: validateError });
            } else {
                next();
            }
        } catch (error) {
            console.error("Unexpected error occurred:", error);
            res.status(500).json({ message: "Unexpected error occurred", error: error.message });
        }
    };
};