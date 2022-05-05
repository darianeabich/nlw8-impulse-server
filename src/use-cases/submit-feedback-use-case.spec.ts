import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

// spies = espiões
// permite saber se, dentro do teste, alguma função foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    { sendMail: sendMailSpy}
);

describe('Submit feedback', () => {
    it('should be able to sumit a feedback', async () => {

        await expect(submitFeedback.excute({
            type: 'BUG',
            comment: 'Está bugando tudo!',
            screenshot: 'data:image/png;base64,test.jpg',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to sumit a feedback without type', async () => {

        await expect(submitFeedback.excute({
            type: '',
            comment: 'Está bugando tudo!',
            screenshot: 'data:image/png;base64,test.jpg',
        })).rejects.toThrow();
    });

    it('should not be able to sumit a feedback without comment', async () => {

        await expect(submitFeedback.excute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg',
        })).rejects.toThrow();
    });

    it('should not be able to sumit a feedback with an invalid screenshot', async () => {

        await expect(submitFeedback.excute({
            type: 'BUG',
            comment: 'Está bugando tudo!',
            screenshot: '123',
        })).rejects.toThrow();
    });
});