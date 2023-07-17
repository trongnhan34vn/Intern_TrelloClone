import toast, { Toaster } from 'react-hot-toast';

import Board from 'react-trello-ts'
import Tag from '../Main/DetailProject/Tag/Tag';

const data = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: true,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};

export default function Example() {
  return (
    <Board style={{backgroundColor: '#fff'}} data={data} />
  );
}
