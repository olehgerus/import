import "./App.css";
import { FlatfileButton } from "@flatfile/react";

const App = () => {
  return (
    <FlatfileButton
      licenseKey="19efe851-9386-46cb-a999-3d7a62a77d71"
      customer={{
        companyId: "ABC-123",
        companyName: "ABC Corp.",
        email: "john@abc123.com",
        name: "John Smith",
        userId: "12345",
      }}
      settings={{
        type: "Contact",
        fields: [
          { label: "Full Name", key: "name" },
          { label: "Email", key: "email" },
        ],
        managed: true,
        allowInvalidSubmit: false,
      }}
      onData={async (results) => {
        return new Promise((resolve, reject) => {
          reject({
            message: "Error Message",
            corrections: [
              {
                name: {
                  value: "Foo Bar",
                  info: [
                    {
                      message: "ERROR",
                      level: "error",
                    },
                  ],
                },
              },
              0,
            ],
          });
        });
      }}
    >
      Import Contacts
    </FlatfileButton>
  );
};

export default App;
