import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phoneNumber } = body;

        if (!name || !phoneNumber) {
            return NextResponse.json(
                { error: 'Name and phone number are required' },
                { status: 400 }
            );
        }

        try {
            const lead = await prisma.lead.create({
                data: {
                    name,
                    phoneNumber,
                },
            });
            return NextResponse.json(lead, { status: 201 });
        } catch (error: any) {
            if (error.code === 'P2002') {
                return NextResponse.json(
                    { error: 'Phone number already exists' },
                    { status: 409 }
                );
            }
            throw error;
        }
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
