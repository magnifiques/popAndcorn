const useGenre = (selectedgenres) => {
    if(selectedgenres.length < 1) return "";


    const genreIds = selectedgenres.map((g) => g.id)
    return genreIds.reduce((acc, curr) => acc + ',' + curr)
}

export default useGenre