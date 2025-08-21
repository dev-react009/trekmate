
import {NextRequest,NextResponse} from "next/server";
import { roleType, PrismaClient} from "@/generated/prisma";

const prisma = new PrismaClient();
console.log(prisma,"prisma client initialized");
type userRequestBody={
    name: string; 
    email: string;
    role?:roleType   
}


export async function GET(){
    try{
        const users = await prisma.user.findMany();
        return NextResponse.json(users,{status:200});
    }catch(error){
        console.log("Error Fetching users:",error);
        return NextResponse.json({error:"internal Error"},{status:500});
    }
}


export async function POST(req:NextRequest){
    try{
        const body = await req.json() as unknown as userRequestBody
        const { name, email,role="user" } = body;
      
        if(!name || !email){
            return NextResponse.json({error:"missing fields"})
        };
        const newUser = await prisma.user.create({
            data:{name,email,role},
        });

        return NextResponse.json(newUser,{status:201});
    }
    catch(error){
        console.error("Error Creating User:",error);
        return NextResponse.json({error:"Internal server error"},{status:500});
    }
}

export async function PUT(req:NextRequest){
    const {id, name,email, role}= await req.json() as unknown as userRequestBody & { id: number };
    const updatedUser = await prisma.user.update({
        where:{id},
        data:{name,email,role}
    });
    return NextResponse.json(updatedUser,{status:201});

};

export async function DELETE(req:NextRequest){
    const {id} = await req.json() as unknown as { id: number };
    const deletedUser = await prisma.user.delete({
        where:{id}
    })
    return NextResponse.json(deletedUser,{status:200});
}



  