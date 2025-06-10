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
        period: "2020-2022",
        PersonId: pessoa1.id
    });

    await db.Project.create({
        title: "Sistema de Gestão Escolar",
        description: "Projeto desenvolvido em Node + React",
        PersonId: pessoa1.id
    });

    await db.Skill.bulkCreate([
        { name: "Node.js", PersonId: pessoa1.id },
        { name: "React", PersonId: pessoa1.id }
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
        period: "2019-2023",
        PersonId: pessoa2.id
    });

    await db.Project.create({
        title: "App de Saúde Mental",
        description: "Aplicativo focado no bem-estar do usuário.",
        PersonId: pessoa2.id
    });

    await db.Skill.bulkCreate([
        { name: "Figma", PersonId: pessoa2.id },
        { name: "Adobe XD", PersonId: pessoa2.id }
    ]);

    console.log("Dados inseridos com sucesso!");
    process.exit();
}

seed();
