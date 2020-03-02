export default {
    fields : [{
        type: "input",
        inputType: "text",
        label: "First name",
        model: "user.firstName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Last name",
        model: "user.lastName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Email",
        model: "user.email",
        required: true,
        validator: "email",
        styleClasses: 'col-sm-12'
        }
    ]
}