import { AddCommentFormSchema } from "../types/addCommentForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";


describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<AddCommentFormSchema> = { };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('test text'),
        )).toEqual({ text: 'test text' });
    });
});