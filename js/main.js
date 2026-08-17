// --- ДАННИ ЗА ЦЕНТРОВЕТЕ ПО УСЛУГИ ---
        const centersData = {
            'Кръвни изследвания': [
                { id: 1, name: 'Медицински център "Здраве"', address: 'София, ул. Хан Аспарух 12', lat: 42.6894, lng: 23.3201 },
                { id: 2, name: 'Студентска Поликлиника (Лаборатория 1)', address: 'София, ул. Академик Николай Стоянов', lat: 42.6498, lng: 23.3445 }
            ],
            'Урина и микробиология': [
                { id: 2, name: 'Студентска Поликлиника (Лаборатория 1)', address: 'София, ул. Академик Николай Стоянов', lat: 42.6498, lng: 23.3445 },
                { id: 3, name: 'Диагностична Лаборатория "Лина"', address: 'София, бул. България 58', lat: 42.6685, lng: 23.2910 }
            ],
            'ЕКГ': [
                { id: 1, name: 'Медицински център "Здраве"', address: 'София, ул. Хан Аспарух 12', lat: 42.6894, lng: 23.3201 },
                { id: 4, name: 'Кардиологичен център "Пулс"', address: 'София, бул. Цариградско шосе 115', lat: 42.6601, lng: 23.3812 }
            ],
            'Ехография': [
                { id: 5, name: 'ДКЦ 5 София', address: 'София, ул. Акад. Иван Гешов 15', lat: 42.6841, lng: 23.3032 },
                { id: 2, name: 'Студентска Поликлиника (Кабинет Ехография)', address: 'София, ул. Академик Николай Стоянов', lat: 42.6498, lng: 23.3445 }
            ],
            'ЯМР': [
                { id: 6, name: 'УМБАЛ "Св. Иван Рилски" (ЯМР Сектор)', address: 'София, бул. Акад. Иван Гешов 15', lat: 42.6835, lng: 23.3040 }
            ],
            'Рентген': [
                { id: 5, name: 'ДКЦ 5 София (Рентген отделение)', address: 'София, ул. Акад. Иван Гешов 15', lat: 42.6841, lng: 23.3032 },
                { id: 6, name: 'УМБАЛ "Св. Иван Рилски"', address: 'София, бул. Акад. Иван Гешов 15', lat: 42.6835, lng: 23.3040 }
            ]
        };

        // --- ДАННИ ЗА ИЗСЛЕДВАНИЯТА ---
        const mockLabResults = {
            'Кръвни изследвания': {
                title: 'Пълна Кръвна Картина (ПКК) + Биохимия',
                date: '25.07.2026 г.',
                status: 'Завършено - В норма',
                doctor: 'д-р И. Петров (Лабораторен лекар)',
                details: `
                    <table style="width:100%; border-collapse:collapse; margin-top:10px;">
                        <tr style="background:#f2f2f2; text-align:left;"><th style="padding:8px;">Показател</th><th style="padding:8px;">Резултат</th><th style="padding:8px;">Референтни стойности</th></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Хемоглобин (HGB)</td><td style="padding:8px; border-bottom:1px solid #eee;">145 g/L</td><td style="padding:8px; border-bottom:1px solid #eee;">120 - 160 g/L</td></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Еритроцити (RBC)</td><td style="padding:8px; border-bottom:1px solid #eee;">4.8 x10^12/L</td><td style="padding:8px; border-bottom:1px solid #eee;">3.9 - 5.3 x10^12/L</td></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Левкоцити (WBC)</td><td style="padding:8px; border-bottom:1px solid #eee;">6.5 x10^9/L</td><td style="padding:8px; border-bottom:1px solid #eee;">3.5 - 10.5 x10^9/L</td></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Глюкоза</td><td style="padding:8px; border-bottom:1px solid #eee;">4.9 mmol/L</td><td style="padding:8px; border-bottom:1px solid #eee;">3.8 - 6.1 mmol/L</td></tr>
                    </table>
                `
            },
            'Урина и микробиология': {
                title: 'Общо изследване на урина и Стерилна урина',
                date: '24.07.2026 г.',
                status: 'Завършено - Няма бактериален растеж',
                doctor: 'д-р М. Иванова (Микробиолог)',
                details: `
                    <table style="width:100%; border-collapse:collapse; margin-top:10px;">
                        <tr style="background:#f2f2f2; text-align:left;"><th style="padding:8px;">Показател</th><th style="padding:8px;">Резултат</th><th style="padding:8px;">Референтни стойности</th></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">pH на урина</td><td style="padding:8px; border-bottom:1px solid #eee;">6.0</td><td style="padding:8px; border-bottom:1px solid #eee;">5.0 - 7.0</td></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Белтък</td><td style="padding:8px; border-bottom:1px solid #eee;">Отрицателен</td><td style="padding:8px; border-bottom:1px solid #eee;">Отрицателен</td></tr>
                        <tr><td style="padding:8px; border-bottom:1px solid #eee;">Микробиология (Стерилна урина)</td><td style="padding:8px; border-bottom:1px solid #eee;">Не се изолира патогенен растеж</td><td style="padding:8px; border-bottom:1px solid #eee;">Няма растеж</td></tr>
                    </table>
                `
            },
            'ЕКГ': {
                title: 'Електрокардиограма (ЕКГ)',
                date: '20.07.2026 г.',
                status: 'Завършено - Нормален запис',
                doctor: 'д-р Г. Георгиев (Кардиолог)',
                details: `
                    <div style="background:#f9f9f9; padding:15px; border-radius:6px; margin-top:10px;">
                        <p><strong>Ритъм:</strong> Синусов, правилен</p>
                        <p><strong>Сърдечна честота (ЧСС):</strong> 72 удара/мин</p>
                        <p><strong>Заключение:</strong> Нормална електрокардиограма. Не се установяват ритъмни или исхемични промени.</p>
                    </div>
                `
            },
            'Ехография': {
                title: 'Ехография на коремни органи',
                date: '18.07.2026 г.',
                status: 'Завършено - Без патология',
                doctor: 'д-р С. Василев (Ехографист)',
                details: `
                    <div style="background:#f9f9f9; padding:15px; border-radius:6px; margin-top:10px;">
                        <p><strong>Черен дроб:</strong> С нормални размери, без огнищни лезии.</p>
                        <p><strong>Жлъчен мехур:</strong> С нормални стени, без конкременти.</p>
                        <p><strong>Бъбреци:</strong> Двустранно запазен паренхим.</p>
                        <p><strong>Заключение:</strong> Коремни органи без данни за патологични изменения.</p>
                    </div>
                `
            },
            'ЯМР': {
                title: 'Ядрено-магнитен резонанс (ЯМР)',
                date: '10.07.2026 г.',
                status: 'Завършено - Готов доклад',
                doctor: 'д-р В. Николов (Образна диагностика)',
                details: `
                    <div style="background:#f9f9f9; padding:15px; border-radius:6px; margin-top:10px;">
                        <p><strong>Протокол:</strong> Т1, Т2 и FLAIR секвенции.</p>
                        <p><strong>Находка:</strong> Нормална мозъчна структура, без фокални лезии или оток.</p>
                        <p><strong>Заключение:</strong> ЯМР изследване в нормални граници.</p>
                    </div>
                `
            },
            'Рентген': {
                title: 'Рентгенография на гръден кош',
                date: '05.07.2026 г.',
                status: 'Завършено - Без изменения',
                doctor: 'д-р Е. Стоянова (Рентгенолог)',
                details: `
                    <div style="background:#f9f9f9; padding:15px; border-radius:6px; margin-top:10px;">
                        <p><strong>Бели дробове:</strong> Прозрачни белодробни полета без инфилтрати.</p>
                        <p><strong>Сърдечна сянка:</strong> В нормални граници.</p>
                        <p><strong>Заключение:</strong> Без данни за активен белодробен процес.</p>
                    </div>
                `
            }
        };

        // --- СЪСТОЯНИЕ И ПОТРЕБИТЕЛ ---
        let currentService = null;
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let selectedCenterObject = null;
        let selectedPendingSlot = null;

        function navigateTo(sectionId) {
            document.getElementById('main-content-section').style.display = 'none';
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('register-section').style.display = 'none';
            document.getElementById('profile-section').style.display = 'none';

            document.getElementById(sectionId).style.display = 'block';
            
            if (sectionId === 'main-content-section') {
                setTimeout(() => map.invalidateSize(), 100);
            }
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        function renderAuthButtons() {
            const container = document.getElementById('auth-buttons-container');
            if (currentUser) {
                container.innerHTML = `
                    <button class="btn btn-login" onclick="openProfileSection()">Моят Профил</button>
                    <button class="btn btn-register" onclick="logout()">Изход</button>
                `;
            } else {
                container.innerHTML = `
                    <button class="btn btn-login" onclick="navigateTo('login-section')">Вход</button>
                    <button class="btn btn-register" onclick="navigateTo('register-section')">Регистрация</button>
                `;
            }
        }

        function openProfileSection() {
            if(currentUser) {
                document.getElementById('profile-user-name').innerText = `${currentUser.firstName} ${currentUser.lastName}`;
                document.getElementById('profile-user-email').innerText = currentUser.email;
                switchProfileMainTab('appointments');
                navigateTo('profile-section');
            }
        }

        function logout() {
            localStorage.removeItem('currentUser');
            currentUser = null;
            renderAuthButtons();
            navigateTo('main-content-section');
            document.getElementById('booking-section').style.display = 'none';
        }

        window.onload = function() {
            renderAuthButtons();

            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            document.getElementById('appointment-date').min = `${yyyy}-${mm}-${dd}`;
        };

        function switchProfileMainTab(tab) {
            const navApp = document.getElementById('profile-nav-appointments');
            const navRes = document.getElementById('profile-nav-results');
            const tabApp = document.getElementById('profile-tab-appointments');
            const tabRes = document.getElementById('profile-tab-results');

            if (tab === 'appointments') {
                navApp.classList.add('active');
                navRes.classList.remove('active');
                tabApp.style.display = 'block';
                tabRes.style.display = 'none';
                switchAppointmentsTab('upcoming');
            } else if (tab === 'results') {
                navRes.classList.add('active');
                navApp.classList.remove('active');
                tabApp.style.display = 'none';
                tabRes.style.display = 'block';
                
                document.getElementById('research-select-dropdown').value = "";
                showLabResultFromSelect("");
            }
        }

        function showLabResultFromSelect(selectedService) {
            const displayArea = document.getElementById('lab-result-display-area');

            if (!selectedService) {
                let allCardsHtml = '';
                for (const [serviceKey, data] of Object.entries(mockLabResults)) {
                    allCardsHtml += buildLabCardHtml(serviceKey, data);
                }
                displayArea.innerHTML = allCardsHtml;
                return;
            }

            const data = mockLabResults[selectedService];
            if (data) {
                displayArea.innerHTML = buildLabCardHtml(selectedService, data);
            } else {
                displayArea.innerHTML = `<p style="color: #777;">Няма намерени резултати за тази услуга.</p>`;
            }
        }

        function buildLabCardHtml(serviceName, data) {
            return `
                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2f3ab2; padding-bottom: 10px; margin-bottom: 15px;">
                        <h3 style="margin: 0; color: #2f3ab2;">${data.title} (${serviceName})</h3>
                        <span style="font-size: 14px; background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-weight: bold;">${data.status}</span>
                    </div>
                    <p style="margin: 5px 0;"><strong>Пациент:</strong> ${currentUser ? currentUser.firstName + ' ' + currentUser.lastName : ''}</p>
                    <p style="margin: 5px 0;"><strong>Дата на пробата/прегледа:</strong> ${data.date}</p>
                    <p style="margin: 5px 0;"><strong>Лекар / Сектор:</strong> ${data.doctor}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
                    ${data.details}
                </div>
            `;
        }

       // --- ВХОД И РЕГИСТРАЦИЯ ---
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('reg-firstname').value.trim();
    const lastName = document.getElementById('reg-lastname').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Грешка: Паролите не съвпадат!");
        return;
    }

    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (users.some(user => user.email === email)) {
        alert("Грешка: Имейлът вече съществува!");
        return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    alert("Успешна регистрация! Вече можете да влезете в профила си.");
    this.reset();
    navigateTo('login-section');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase(); // 👈 Коригирано тук
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        currentUser = validUser;
        renderAuthButtons();
        navigateTo('main-content-section'); 
        this.reset();
    } else {
        alert("Грешка: Невалидни данни за вход!");
    }
});

        // --- КАРТА И ЛОГИКА ЗА СЕКЦИЯТА "МЕДИЦИНСКИ ЦЕНТРОВЕ" ---
        let currentCenterId = null;
        let activeMarkers = [];

        const map = L.map('map').setView([42.665, 23.33], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        let userMarker = null;
        function locateUser() {
            if (!navigator.geolocation) return;
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                if (userMarker) map.removeLayer(userMarker);
                userMarker = L.circleMarker([lat, lng], { color: '#2f3ab2', radius: 10 }).addTo(map);
                map.setView([lat, lng], 14);
            });
        }

        // ОБНОВЕНА ФУНКЦИЯ С HOVER ЕФЕКТИ И В КАРТАТА, И В СПИСЪКА
        function scrollToMap(service) {
            currentService = service;
            document.getElementById('map-desc').innerText = `Центрове, предлагащи: ${service}`;
            
            // Премахване на предишните маркери
            activeMarkers.forEach(item => map.removeLayer(item.marker));
            activeMarkers = [];

            const centers = centersData[service] || [];
            const listContainer = document.getElementById('centers-list-container');
            listContainer.innerHTML = '';

            if (centers.length > 0) {
                const bounds = [];
                
                centers.forEach(center => {
                    // 1. Създаване на маркер на картата
                    const marker = L.marker([center.lat, center.lng]).addTo(map);
                    
                    // Добавяне на Tooltip при HOVER
                    marker.bindTooltip(`<b>${center.name}</b><br>${center.address}`, { direction: 'top', offset: [0, -20] });
                    marker.bindPopup(`<b>${center.name}</b><br>${center.address}`);
                    
                    // Кликване върху маркера
                    marker.on('click', () => selectCenter(center));
                    
                    activeMarkers.push({ id: center.id, marker: marker });
                    bounds.push([center.lat, center.lng]);

                    // 2. Създаване на карта за всеки център в списъка
                    const card = document.createElement('div');
                    card.className = 'center-card';
                    card.innerHTML = `
                        <div class="center-card-title">
                            <span>🏥</span>
                            <span>${center.name}</span>
                        </div>
                        <div class="center-card-address">📍 ${center.address}</div>
                    `;

                    // HOVER ЕФЕКТ: Когато мишката е над картата на центъра, отваряме подсказката на маркера
                    card.onmouseenter = () => {
                        marker.openTooltip();
                    };
                    card.onmouseleave = () => {
                        marker.closeTooltip();
                    };

                    // При клик върху картата на центъра
                    card.onclick = () => selectCenter(center);

                    listContainer.appendChild(card);
                });

                if (bounds.length === 1) {
                    map.setView(bounds[0], 15);
                } else {
                    map.fitBounds(bounds, { padding: [50, 50] });
                }
            } else {
                listContainer.innerHTML = '<p style="color: #777; grid-column: 1/-1;">Няма намерени центрове за тази услуга.</p>';
            }
            
            document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
        }

        function selectCenter(center) {
            currentCenterId = center.id;
            selectedCenterObject = center;
            document.getElementById('selected-center-title').innerText = center.name;
            document.getElementById('selected-center-address').innerText = center.address;
            document.getElementById('appointment-date').value = '';
            document.getElementById('calendar-container').innerHTML = '';
            
            document.getElementById('booking-section').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            
            setTimeout(() => {
                document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        function generateTimeSlots() {
            const dateInput = document.getElementById('appointment-date').value;
            if (!dateInput || !currentCenterId) return;

            const calendarContainer = document.getElementById('calendar-container');
            calendarContainer.innerHTML = ''; 
            document.getElementById('summary').style.display = 'none';

            const allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];

            const now = new Date();
            const yyyy = now.getFullYear();
            const mm = String(now.getMonth() + 1).padStart(2, '0');
            const dd = String(now.getDate()).padStart(2, '0');
            const todayStr = `${yyyy}-${mm}-${dd}`;

            const isToday = (dateInput === todayStr);
                if (new Date(dateInput) < new Date(todayStr)) {
    calendarContainer.innerHTML = '<p style="color: #c0392b; grid-column: 1/-1; font-weight: bold;">Не можете да избирате изминали дати.</p>';
    return;
}

            for (let h = 9; h <= 15; h++) {
                for (let m = 0; m < 60; m += 20) {
                    const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                    const slotDiv = document.createElement('div');
                    slotDiv.className = 'time-slot';
                    slotDiv.innerText = timeStr;

                    const isPastTime = isToday && (h < now.getHours() || (h === now.getHours() && m <= now.getMinutes()));
                    const isAlreadyBooked = allAppointments.some(app => 
                        app.centerId === currentCenterId && app.date === dateInput && app.time === timeStr
                    );

                    if (isPastTime) {
                        slotDiv.classList.add('disabled');
                        slotDiv.title = "Този час вече е изтекъл";
                    } else if (isAlreadyBooked) {
                        slotDiv.classList.add('disabled');
                        slotDiv.title = "Този час вече е записан";
                    } else {
                        slotDiv.onclick = function() { selectTime(this, dateInput, timeStr); };
                    }
                    calendarContainer.appendChild(slotDiv);
                }
            }
        }

        function selectTime(element, date, time) {
            const summaryBox = document.getElementById('summary');
            
            if (!currentUser) {
                summaryBox.innerHTML = `
                    <div style="color: #c0392b; font-weight: bold;">
                        ⚠️ За да запишете час, първо трябва да влезете в профила си от бутона "Вход" най-горе на страницата!
                    </div>
                `;
                summaryBox.style.display = 'block';
                setTimeout(() => summaryBox.scrollIntoView({ behavior: 'smooth' }), 100);
                return;
            }

            const activeSlots = document.querySelectorAll('.time-slot.selected');
            activeSlots.forEach(slot => slot.classList.remove('selected'));
            element.classList.add('selected');

            selectedPendingSlot = { date, time };
            
            const formattedDate = new Date(date).toLocaleDateString('bg-BG');

            summaryBox.innerHTML = `
                <h3 style="margin-top:0; color:#2f3ab2;">Искате ли да запишете час?</h3>
                <p style="margin: 5px 0;"><strong>Медицински център:</strong> ${selectedCenterObject.name}</p>
                <p style="margin: 5px 0;"><strong>Пациент:</strong> ${currentUser.firstName} ${currentUser.lastName}</p>
                <p style="margin: 5px 0;"><strong>Дата:</strong> ${formattedDate} г.</p>
                <p style="margin: 5px 0;"><strong>Час:</strong> ${time} ч.</p>
                <button class="btn btn-register" style="margin-top: 15px; border-radius: 6px; text-transform: none;" onclick="confirmBooking()">
                    Потвърди резервацията
                </button>
            `;
            summaryBox.style.display = 'block';

            setTimeout(() => {
                summaryBox.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        function confirmBooking() {
        if (!selectedPendingSlot || !currentUser || !selectedCenterObject) {
            alert("Моля, изберете център, дата и час и се уверете, че сте влезли в профила си!");
            return;
        }

        let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];

        const newBooking = {
            id: Date.now(),
            userEmail: currentUser.email,
            userName: `${currentUser.firstName} ${currentUser.lastName}`,
            service: currentService || 'Медицинска услуга',
            centerId: selectedCenterObject.id,
            centerName: selectedCenterObject.name,
            centerAddress: selectedCenterObject.address,
            date: selectedPendingSlot.date,
            time: selectedPendingSlot.time
        };

        allAppointments.push(newBooking);
        localStorage.setItem('allAppointments', JSON.stringify(allAppointments));

        const formattedDate = new Date(selectedPendingSlot.date).toLocaleDateString('bg-BG');
        const summaryBox = document.getElementById('summary') || document.getElementById('summary-box');

        if (summaryBox) {
            summaryBox.style.display = 'block';
            summaryBox.style.backgroundColor = '#f0fdf4';
            summaryBox.style.borderLeft = '5px solid #16a34a';
            summaryBox.style.padding = '15px';
            summaryBox.style.borderRadius = '8px';
            summaryBox.innerHTML = `
                <h3 style="color: #16a34a; margin: 0 0 8px 0;">✅ Успешна резервация!</h3>
                <p style="margin: 0; color: #15803d;">
                    Запазихте час за <strong>${newBooking.service}</strong> в <strong>${newBooking.centerName}</strong> на <strong>${formattedDate} г.</strong> от <strong>${newBooking.time} ч.</strong>
                </p>
                <button onclick="openProfileSection()" style="margin-top: 12px; background: #2f3ab2; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    📋 Прегледай в Профила
                </button>
            `;
        }

        selectedPendingSlot = null;
        if (typeof generateTimeSlots === 'function') {
            generateTimeSlots();
        }
        renderAppointmentsList('upcoming');
    }

function cancelBooking(id) {
    if (confirm("Сигурни ли сте, че искате да анулирате тази резервация?")) {
        let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
        allAppointments = allAppointments.filter(app => app.id !== id);
        localStorage.setItem('allAppointments', JSON.stringify(allAppointments));
        renderAppointmentsList('upcoming');
    }
}

function editBooking(id) {
    let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
    const booking = allAppointments.find(app => app.id === id);
    if (!booking) return;

    const newTime = prompt(`Текущ час: ${booking.time}\nВъведете нов час (напр. 14:00):`, booking.time);
    if (newTime && newTime.trim() !== "" && newTime !== booking.time) {
        booking.time = newTime.trim();
        localStorage.setItem('allAppointments', JSON.stringify(allAppointments));
        renderAppointmentsList('upcoming');
    }
}

// Инициализиране при зареждане с коригирано име на функцията
document.addEventListener('DOMContentLoaded', () => {
    if (currentUser) {
        renderAppointmentsList('upcoming');
    }
});

// --- ТАБОВЕ ЗА РЕЗЕРВАЦИИ В ПРОФИЛА ---
function switchAppointmentsTab(tabType) {
    const upcomingBtn = document.getElementById('tab-upcoming-btn');
    const pastBtn = document.getElementById('tab-past-btn');

    if (tabType === 'upcoming') {
        upcomingBtn.classList.add('active');
        pastBtn.classList.remove('active');
    } else {
        pastBtn.classList.add('active');
        upcomingBtn.classList.remove('active');
    }

    renderAppointmentsList(tabType);
}

function renderAppointmentsList(tabType) {
    const container = document.getElementById('appointments-list-container');
    let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
    
    if (!currentUser) return;

    const userAppointments = allAppointments.filter(app => app.userEmail === currentUser.email);
    const now = new Date();

    const filtered = userAppointments.filter(app => {
        const appDateTime = new Date(`${app.date}T${app.time}`);
        return tabType === 'upcoming' ? appDateTime >= now : appDateTime < now;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color: #777;">Няма намерени ${tabType === 'upcoming' ? 'предстоящи' : 'минали'} резервации.</p>`;
        return;
    }

    filtered.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

    let html = '';
    filtered.forEach(app => {
        const formattedDate = new Date(app.date).toLocaleDateString('bg-BG');
        html += `
            <div class="booking-card ${tabType === 'past' ? 'past' : ''}" style="border: 1px solid #e0e0e0; padding: 15px; margin-bottom: 10px; border-radius: 6px;">
                <div style="font-weight: bold; font-size: 18px; color: #2c3e50;">${app.centerName}</div>
                <div style="color: #666; font-size: 14px; margin-bottom: 8px;">📍 ${app.centerAddress}</div>
                <div><strong>Дата:</strong> ${formattedDate} г. | <strong>Час:</strong> ${app.time} ч.</div>
                ${tabType === 'upcoming' ? `
                    <div style="margin-top: 10px;">
                        <button class="btn" style="background:#e74c3c; color:#fff; padding:4px 8px; border:none; border-radius:4px; cursor:pointer;" onclick="cancelBooking(${app.id})">Откажи</button>
                        <button class="btn" style="background:#f39c12; color:#fff; padding:4px 8px; border:none; border-radius:4px; cursor:pointer;" onclick="editBooking(${app.id})">Редактирай час</button>
                    </div>
                ` : ''}
            </div>
        `;
    });

    container.innerHTML = html;
}
