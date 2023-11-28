exports.postData = async (req, res) => {
  const { token, data } = req.body;
  console.log(token, data);
  try {
    const postPage = await fetch(
      "https://api.notion.com/v1/blocks/e049fa81a9214667b2dd35937f6b65df/children",
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Notion-Version": "2022-06-28",
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          children: [
            {
              heading_2: {
                rich_text: [
                  {
                    text: {
                      content: `${data}`,
                    },
                  },
                ],
                children: [
                  {
                    paragraph: {
                      rich_text: [
                        {
                          text: {
                            content: "Paragraph",
                          },
                        },
                      ],
                    },
                  },
                ],
                is_toggleable: true,
              },
            },
          ],
        }),
      }
    );

    const resultPostPage = await postPage.json();
    console.log(resultPostPage);
    res.status(200).json({ message: "success!" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
