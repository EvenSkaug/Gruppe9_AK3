export default  {
    name: "members",
    title: "Members",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
      {
        name: "description",
        title: "Desctiption",
        type: "text",
      },
      {
        name: "email",
        title: "Email",
        type: "email",
      },
      {
        name: "interests",
        title: "Interests",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 96,
        },
      },
      {
        name: "worklog",
        title: "Work Log",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "date",
                title: "Date",
                type: "datetime",
              },
              {
                name: "description",
                title: "Description",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  };