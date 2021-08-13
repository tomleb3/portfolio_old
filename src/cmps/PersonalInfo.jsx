export const PersonalInfo = () => {

    const publicUrl = process.env.PUBLIC_URL

    return <article className="personal-info">
        <header className="flex a-center">
            <img src={`${publicUrl}/assets/imgs/contact.png`} alt="Contact" />
            <label>Contact Info</label>
        </header>
        <main>
            <div className="flex a-center">
                <img src={`${publicUrl}/assets/imgs/name.png`} alt="Name" />
                <span>Tom Lebeodkin</span>
            </div>
            <div className="flex a-center">
                <img src={`${publicUrl}/assets/imgs/phone.png`} alt="Phone" />
                <span>+972 545323660</span>
            </div>
            <div className="flex a-center">
                <img src={`${publicUrl}/assets/imgs/email.png`} alt="Email" />
                <span>tomleb3@gmail.com</span>
            </div>
        </main>
    </article>
}