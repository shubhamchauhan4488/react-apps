

const Title = ({ titlePosterImageModel, titleNameText, titleReleaseText, titleTypeText, topCredits }) => {
    return (
        <>
            <div className="info-card">
                <img src={titlePosterImageModel?.url} width={100} height={100} />
                <div className="info-detail-wrapper">
                    <p><b>{titleNameText}</b></p>
                    <p>{titleReleaseText} * {titleTypeText}</p>
                    <p> {topCredits?.length > 0 && topCredits.map(credit => {
                        return (
                            <span>{credit}" "</span>
                        )
                    })}
                    </p>

                </div>
            </div>
        </>
    )
}

export const TitlesList = ({ titles }) => {
    console.log('titles---', titles)
    return (
        <>
            <h1>Titles</h1>
            {titles?.length > 0 ? titles.map((title) => {
                return (
                    <Title {...title} />
                )
            }) : <></>}
        </>

    )
}