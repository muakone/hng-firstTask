import React from 'react'

const Links = () => {
    const linkData = [
        {
            id: "btn__zuri",
            text: "Zuri",
            link: "https://training.zuri.team/"
        },
        {
            id: "books",
            text: "Books",
            link: "http://books.zuri.team",
            subText: "You can get an affordable coding books here"
        },
        {
            id: "book__python",
            text: "Pthon Books",
            link: "https://books.zuri.team/python-for-beginners?ref_id=<muakone>"
        },
        {
            id: "pitch",
            text: "Pitch",
            link: "https://background.zuri.team"
        },
        {
            id: "book_design",
            text: "Book Design",
            link: "https://books.zuri.team/design-rules"
        },

    ]
  return (
    <div>
        {
            linkData.map((data) => (
                <>
                <div>{data.text}</div>
                {data.subText && <p>{data.subText}</p>}
                </>
            ))
        }
    </div>
  )
}

export default Links