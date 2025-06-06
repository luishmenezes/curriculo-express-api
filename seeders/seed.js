const db = require('../models');

async function seed() {
    await db.sequelize.sync({ force: true });


    const pessoa1 = await db.Person.create({
        name: "João Silva",
        email: "joao@gmail.com",
        phone: "11999999999",
        bio: "Desenvolvedor Full Stack com 5 anos de experiência."
    });

    await db.Education.create({
        title: "Bacharelado em Ciência da Computação",
        institution: "USP",
        year: 2020,
        PersonId: pessoa1.id
    });

    await db.Experience.create({
        title: "Desenvolvedor Backend",
        company: "Tech Solutions",
        period: "Jan/2021 - Dez/2023",
        PersonId: pessoa1.id
    });

    await db.Project.create({
        title: "Plataforma de Gestão Escolar",
        description: "Sistema web completo feito com React, Node.js e PostgreSQL.",
        PersonId: pessoa1.id
    });

    await db.Skill.bulkCreate([
        { name: "Node.js", PersonId: pessoa1.id },
        { name: "React", PersonId: pessoa1.id },
        { name: "PostgreSQL", PersonId: pessoa1.id },
        { name: "Docker", PersonId: pessoa1.id }
    ]);


    const pessoa2 = await db.Person.create({
        name: "Maria Oliveira",
        email: "maria@gmail.com",
        phone: "21988888888",
        bio: "Designer UX/UI com foco em acessibilidade e mobile."
    });

    await db.Education.create({
        title: "Design Digital",
        institution: "PUC-Rio",
        year: 2018,
        PersonId: pessoa2.id
    });

    await db.Experience.create({
        title: "UX Designer",
        company: "Agência Criativa",
        period: "Mar/2019 - Atual",
        PersonId: pessoa2.id
    });

    await db.Project.create({
        title: "App de Saúde Mental",
        description: "Aplicativo mobile criado com React Native para promover o bem-estar.",
        PersonId: pessoa2.id
    });

    await db.Skill.bulkCreate([
        { name: "Figma", PersonId: pessoa2.id },
        { name: "Adobe XD", PersonId: pessoa2.id },
        { name: "Acessibilidade Web", PersonId: pessoa2.id },
        { name: "UX Research", PersonId: pessoa2.id }
    ]);

    console.log("Banco populado com sucesso com 2 currículos completos!");
    process.exit();
}

seed();
