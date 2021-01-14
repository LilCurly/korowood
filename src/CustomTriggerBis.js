function trigger(params = {}) {
    const interactionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                params.action(entry.target)
            }
        })
    })

    const elements = document.querySelectorAll(params.targets)

    elements.forEach((element) => {
        interactionObserver.observe(element)
    })
}

export default trigger;