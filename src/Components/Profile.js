import React, { useState } from "react";
import { useUser } from "../Context/UserContext";

const Profile = () => {
    const { id, name, email, profileImage } = useUser();

    // Estado para manejar el idioma
    const [language, setLanguage] = useState("es"); // 'es' para español, 'en' para inglés

    // Contenido en español
    const contentEs = {
        personalInfo: {
            title: "Información Personal",
            email: "Email",
            id: "ID",
        },
        education: {
            title: "Educación",
            items: [
                "Bachillerato Secundaria",
                "Estudiante en Ingeniería en Computación del Instituto Tecnológico de Costa Rica",
            ],
        },
        softSkills: {
            title: "Habilidades Blandas",
            items: [
                "Comunicación: Habilidad para comunicar ideas de manera clara y efectiva, tanto de forma oral como escrita.",
                "Trabajo en equipo: Capacidad para colaborar eficazmente con otros para alcanzar un objetivo común.",
                "Resolución de problemas: Aptitud para identificar problemas, pensar en soluciones creativas y ejecutarlas de manera efectiva.",
                "Liderazgo: Habilidad para dirigir y motivar a otros, tomar decisiones y asumir responsabilidades.",
            ],
        },
        professionalProfile: {
            title: "Perfil Profesional",
            description:
                "Estudiante del Tecnológico de Costa Rica, con dos años en la carrera de Ingeniería en Computación. Además con conocimientos en el área de electrónica, ya que también tengo cursado 3 años de Ingeniería en Electrónica",
        },
        workExperience: {
            title: "Experiencia Laboral",
            items: [
                "Elaboración de proyectos sencillos en Python y C++.",
                "Diseño web meramente estético utilizando HTML, CSS y JS.",
                "Liderazgo de equipos en el desarrollo de proyectos universitarios.",
            ],
        },
        technicalSkills: {
            title: "Habilidades Técnicas",
            items: [
                "Lógica de Programación desarrollada en Python y C++.",
                "POO en Java.",
                "Estructuras de Datos en C++.",
                "Diseño Web: HTML, CSS.",
            ],
        },
    };

    // Contenido en inglés
    const contentEn = {
        personalInfo: {
            title: "Personal Information",
            email: "Email",
            id: "ID",
        },
        education: {
            title: "Education",
            items: [
                "High School Diploma",
                "Student in Computer Engineering at the Costa Rica Institute of Technology",
            ],
        },
        softSkills: {
            title: "Soft Skills",
            items: [
                "Communication: Ability to communicate ideas clearly and effectively, both orally and in writing.",
                "Teamwork: Capacity to collaborate effectively with others to achieve a common goal.",
                "Problem-solving: Skill to identify issues, think of creative solutions, and implement them effectively.",
                "Leadership: Ability to lead and motivate others, make decisions, and assume responsibilities.",
            ],
        },
        professionalProfile: {
            title: "Professional Profile",
            description:
                "Student at the Costa Rica Institute of Technology, with a two years in the Computer Engineering Career. I also have knowledge in the area of electronics, since I also have 3 years of Electronics Engineering",
        },
        workExperience: {
            title: "Work Experience",
            items: [
                "Development of simple projects in Python and C++.",
                "Web design focused on aesthetics using HTML, CSS, and JS.",
                "Leadership of teams in the development of university projects.",
            ],
        },
        technicalSkills: {
            title: "Technical Skills",
            items: [
                "Programming Logic developed in Python and C++.",
                "OOP in Java.",
                "Data Structures in C++.",
                "Web Design: HTML, CSS.",
            ],
        },
    };

    // Elegir el contenido según el idioma
    const content = language === "es" ? contentEs : contentEn;

    return (
        <div>
            <div className="profile-container">
                {/* Columna Izquierda */}
                <div className="profile-left">
                    <div className="personal-info">
                        <img src={profileImage} alt={name} />
                        <h2>{name}</h2>
                        <p>{content.personalInfo.email}: {email}</p>
                        <p>{content.personalInfo.id}: {id}</p>
                    </div>
                    <div className="card">
                        <h3>{content.education.title}</h3>
                        <ul>
                            {content.education.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card">
                        <h3>{content.softSkills.title}</h3>
                        <ul>
                            {content.softSkills.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="profile-right">
                    <div className="card">
                        <h3>{content.professionalProfile.title}</h3>
                        <p>{content.professionalProfile.description}</p>
                    </div>
                    <div className="card">
                        <h3>{content.workExperience.title}</h3>
                        <ul>
                            {content.workExperience.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card">
                        <h3>{content.technicalSkills.title}</h3>
                        <ul>
                            {content.technicalSkills.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Botón de cambio de idioma */}
            <div className="language-button-container">
                <button
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                    className="language-button"
                >
                    {language === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
            </div>
        </div>
    );
};

export default Profile;