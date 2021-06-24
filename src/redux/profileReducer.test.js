import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {
            id: 1,
            message: 'Hello! How are you?',
            likesCount: 16
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 12
        }
    ]
};

it('after deleting post, their amount should be decremented', () => {
    const action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});


it(`posts' amount shouldn't decrement, if post id isn't correct`, () => {
    const action = deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});