export default new (class {
    ensure(inputFields: Record<string, any>, requiredFields: string[]): boolean {
        for (const field of requiredFields) {
            if (!(field in inputFields) || inputFields[field] === null || inputFields[field] === undefined) {
                const error = {
                    status: 422, // Custom error status code
                    message: `Parameter missing ${field}`,
                };
                throw error;
            }
        }
        return true;
    }
})();
