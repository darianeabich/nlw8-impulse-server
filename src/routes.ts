import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';


export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdaptar = new NodemailerMailAdapter();
    const submitFeedback = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdaptar
    );

    await submitFeedback.excute({
        type,
        comment,
        screenshot
    });

    return res.status(201).send();
});