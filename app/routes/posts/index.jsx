import { styled } from '@stitches/react';

const Button = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

export default function Posts() {
    return (
        <main>
            <h1>Posts</h1>
            <Button>Button</Button>
        </main>
    );
  }