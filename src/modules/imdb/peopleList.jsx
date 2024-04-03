

const Name = ({ avatarImageModel, displayNameText, knownForJobCategory, knownForTitleText, knownForTitleYear }) => {
    return (
        <>
            <div className="info-card">
                <img src={avatarImageModel?.url} width={60} height={60} />
                <div className="info-detail-wrapper">
                    <p><b>{displayNameText}</b></p>
                    <p>{knownForJobCategory}, {knownForTitleText}, {knownForTitleYear}</p>
                </div>
            </div>
        </>
    )
}

export const NamesList = ({ names }) => {
    console.log('names---', names)
    return (
        <>
            <h1>People</h1>
            {names?.length > 0 ? names.map((name) => {
                return (
                    <Name {...name} />
                )
            }) : <></>}
        </>

    )
}