<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_E_all">
        
        <g id="CHID_DENT_E">
          <path
            id="CHID_DENT_ROOT_E"
            v-if="selectedTooth.dent.root1"
            d="M268.85,229.4c-2.73.63,3.79,7.59,1.11,19.16-.93,4-2.17,5.18-3.55,11.63-1.29,6,.09,3.69-1.11,11.24-.57,3.6-1.06,5.31.67,6,2.24.9,5-1.21,12.42-1.58,4.17-.22,4.86.36,11.1.17,4.71-.15,7.06-.22,8.43-1,2.05-1.21,1.13-3.13-.67-8.18-3.2-9-2.25-8.51-4.44-12.9a55,55,0,0,0-5.1-8.43C282,237.76,272,228.67,268.85,229.4Z"
            transform="translate(-254.35 -226.51)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          <path
            id="CHID_DENT_CROWN_E"
            v-if="selectedTooth.dent.crown1"
            :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
            d="M265.74,278.84a15.17,15.17,0,0,0-5.76,4.35c-1.9,2.27-1.85,3.82-2.45,7.15-1.4,7.77-3.67,10.23-1.55,14.56a5,5,0,0,0,3.55,3.07c2.11.42,3.48-.65,6.88-.9s4.69.7,9.1,1.28c4.22.56,4.29-.17,12.2-.13,7.69,0,8.71.74,13.76.26,3.43-.33,7.06-.67,9.09-2.3,1.6-1.28,1.38-2.66.89-5.88-1.4-9.28-1.07-8.06-1.33-9.07-2.9-11.45-5.72-12.83-7.32-13.41a30.36,30.36,0,0,0-5.77-1,85.5,85.5,0,0,0-16.42-.39C273.34,276.88,269.55,277.12,265.74,278.84Z"
            transform="translate(-254.35 -226.51)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
        </g>
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_E"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M302.38,307.81l4.47-.7a8.68,8.68,0,0,0,2.35-1c2.45-1.63,1.86-3.92,1.21-6.88-.39-1.79-1-4.65-1.66-8.49a1.82,1.82,0,0,0-.42-1.66,2.61,2.61,0,0,0-1.31-.88,4.22,4.22,0,0,0-1.11-.2h-10.4c-2.72,0-4.93,1.27-4.93,2.84v15a2.68,2.68,0,0,0,1.49,1.61,8.76,8.76,0,0,0,3.66.62A44.37,44.37,0,0,0,302.38,307.81Z"
          transform="translate(-254.35 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_E"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M275.4,307.71a6.53,6.53,0,0,1-2-.28c-1-.2-1.19-.34-2.36-.57-.77-.14-.75-.09-1.6-.26a12.79,12.79,0,0,0-1.68-.31,8.92,8.92,0,0,0-1.5.09c-.85.09-1.51.15-2.41.31a22.7,22.7,0,0,0-2.29.48,4.77,4.77,0,0,1-1.44.35,3,3,0,0,1-1.76-.7,3.78,3.78,0,0,1-1.24-1.84c-.12-.31-.28-.7-.43-1.2a10.56,10.56,0,0,1-.29-1.44,9.14,9.14,0,0,1-.09-1.75,5.28,5.28,0,0,1,.21-1.4c.07-.25.13-.38.29-.86s.22-.79.24-.86c.07-.27.12-.5.29-1.43s.16-.94.23-1.33c.13-.64.21-1,.31-1.34s.16-.56.23-.84.1-.49.12-.59c.49-3,.53-3.36,1.07-3.64.27-.14.55-.2,6.18.13,3.6.21,3.51.2,3.95.21,2.5,0,3.25-.22,4.28.32,1.8.94,1,6.65.85,9C274.26,303.17,277,307.39,275.4,307.71Z"
          transform="translate(-254.35 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_E"
          v-if="selectedTooth.filling_caries_class_v"
          x="20.72"
          y="56.68"
          width="16.8"
          height="2.7"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_E"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M263.53,297l-6.34-.65h0l.78-3.83h0l5.56-.59c1.88,0,3.41.88,3.41,2V295C266.94,296.09,265.41,297,263.53,297Z"
          transform="translate(-254.35 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_E"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M309.66,296l-7.16,1c-1.88,0-3.41-.88-3.41-2v-1.14c0-1.09,1.53-2,3.41-2l6.78.86h0l-.15,1.11V295Z"
          transform="translate(-254.35 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoE"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M274.4,236.64c-1.72.33,3.6,6.6,1.31,15.13-1.1,4.12-2.81,4.4-3.68,9.23-.38,2.11.21.6.79,10.14.1,1.69.21,3.78,2.1,4.24,1.12.27,1.66-.31,4.47-.45,2.08-.11,2.54.17,6.57.3a19.16,19.16,0,0,0,3.42,0c2.63-1.06-4.8-6.85-6.57-15.44A102.47,102.47,0,0,1,282,249.2c-.13-2.54-.22-4.88-2.1-7.72C278.35,239.13,275.54,236.42,274.4,236.64Z"
          transform="translate(-254.35 -226.51)"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <g id="CHID_DENT_Post_E" v-if="selectedTooth.post.post1">
          <path
            d="M274,277.2l16.88-1c.62,0,1.17.21,1.22.55l.38,2.44c.05.34-.42.64-1,.68l-16.88,1c-.63,0-1.18-.21-1.23-.55l-.37-2.44C272.92,277.54,273.38,277.24,274,277.2Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M277.05,247.86l2.13-.13c1.11-.06,2.08.38,2.17,1l4.2,27.33c.09.6-.73,1.14-1.84,1.21l-2.13.12c-1.11.06-2.08-.38-2.17-1l-4.2-27.33C275.12,248.46,275.94,247.92,277.05,247.86Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M275.92,271.21l11.56-.66c.3,0,.57.11.6.27l.12.79c0,.16-.2.31-.51.33l-11.55.66c-.31,0-.58-.1-.61-.27l-.12-.79C275.39,271.38,275.62,271.23,275.92,271.21Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M275.1,267.05l11.62-.66c.29,0,.54.1.57.25l.12.83c0,.15-.19.29-.47.31l-11.63.66c-.28,0-.54-.09-.56-.25l-.13-.82C274.6,267.21,274.81,267.07,275.1,267.05Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M274.66,262.88l11.53-.66c.31,0,.58.11.61.28l.12.77c0,.17-.21.32-.52.34l-11.53.66c-.31,0-.59-.11-.61-.28l-.12-.77C274.11,263.05,274.34,262.89,274.66,262.88Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M273.81,258.72l11.64-.66c.29,0,.53.09.56.25l.13.83c0,.15-.19.29-.47.31l-11.64.66c-.29,0-.54-.09-.56-.25l-.13-.83C273.32,258.88,273.53,258.74,273.81,258.72Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M273.16,254.56l11.67-.67c.27,0,.51.09.54.24l.13.85c0,.15-.18.29-.46.3l-11.59.66c-.32,0-.6-.11-.62-.28l-.13-.8C272.68,254.71,272.88,254.57,273.16,254.56Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.73,250.38l11.54-.66c.31,0,.59.11.61.27l.12.78c0,.17-.2.32-.52.34l-11.53.66c-.31,0-.59-.11-.61-.28l-.12-.77C272.19,250.55,272.42,250.4,272.73,250.38Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="18.48"
            y1="28.14"
            x2="30.29"
            y2="23.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="18.73"
            y1="29.38"
            x2="30.54"
            y2="24.47"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="19.07"
            y1="32.35"
            x2="30.8"
            y2="27.42"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="19.32"
            y1="33.51"
            x2="31.01"
            y2="28.68"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="19.97"
            y1="36.45"
            x2="31.44"
            y2="31.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="20.14"
            y1="37.7"
            x2="31.68"
            y2="32.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="20.38"
            y1="40.66"
            x2="32.27"
            y2="35.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="20.64"
            y1="41.88"
            x2="32.39"
            y2="37.01"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="21.21"
            y1="44.8"
            x2="32.72"
            y2="39.92"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="21.43"
            y1="46.04"
            x2="32.87"
            y2="41.2"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M285.19,251.22"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M277.19,280l11.5-.66c1.23-.07,2.3.41,2.4,1.08l.46,3c.1.66-.81,1.26-2,1.33l-11.5.65c-1.22.07-2.3-.41-2.4-1.07l-.46-3C275.05,280.64,276,280.05,277.19,280Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_E">
          <path
            id="CHID_DENT_Left_Ginfivitis_E"
            v-if="selectedTooth.ginfivitis.left"
            d="M258.58,283.36c.9-.05.55-1.34,2.41-2.78s4.5-1.65,4.52-2.6c0-.62-1-.74-1.69-1.71a2.56,2.56,0,0,1,0-2.61c.67-1.69.82-3.19,1.13-6.19.38-3.73-.94-3.73,0-6.12.73-1.87,1.94-2.88,1-3.58s-3.33-.76-4.95-.25c-1.78.57-2.56,1.85-3.12,7.58-.71,7.29.38,6.89-.71,9.37-.88,2-2.14,3.51-1.41,5.79C256.25,281.81,257.56,283.41,258.58,283.36Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_E"
            v-if="selectedTooth.ginfivitis.right"
            d="M307.55,281c-.34,0-.14-1-1.28-2.12a7.76,7.76,0,0,0-2.54-1.54c-3.12-1.23-6.74-.84-6.8-1.23,0-.23,1.28-.25,2.27-.89a2.27,2.27,0,0,0,1-2.28,10.46,10.46,0,0,0-1.13-4.16c-.78-1.54-1.37-3.74-2.55-8.15-.68-2.52-.5-2.56-1-3.5-.41-.77-.76-1.19-.43-1.39.66-.38,3.64.29,5.38,1.47,2,1.32,1.53,2.72,2,5.46a24,24,0,0,0,2.41,6.68c2.11,3.94,4,4.39,4.24,7.17C309.3,278.94,308,281,307.55,281Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            id="CHID_DENT_Left_periodontal_E"
            v-if="selectedTooth.periodontal.left"
            d="M258.58,283.36c.9-.05.55-1.34,2.41-2.78s4.5-1.65,4.52-2.6c0-.62-1-.74-1.69-1.71a2.56,2.56,0,0,1,0-2.61c.67-1.69.82-3.19,1.13-6.19.38-3.73-.94-3.73,0-6.12.73-1.87,1.94-2.88,1-3.58s-3.33-.76-4.95-.25c-1.78.57-2.56,1.85-3.12,7.58-.71,7.29.38,6.89-.71,9.37-.88,2-2.14,3.51-1.41,5.79C256.25,281.81,257.56,283.41,258.58,283.36Z"
            transform="translate(-254.35 -226.51)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            id="CHID_DENT_Right_periodontal_E"
            v-if="selectedTooth.periodontal.right"
            d="M307.55,281c-.34,0-.14-1-1.28-2.12a7.76,7.76,0,0,0-2.54-1.54c-3.12-1.23-6.74-.84-6.8-1.23,0-.23,1.28-.25,2.27-.89a2.27,2.27,0,0,0,1-2.28,10.46,10.46,0,0,0-1.13-4.16c-.78-1.54-1.37-3.74-2.55-8.15-.68-2.52-.5-2.56-1-3.5-.41-.77-.76-1.19-.43-1.39.66-.38,3.64.29,5.38,1.47,2,1.32,1.53,2.72,2,5.46a24,24,0,0,0,2.41,6.68c2.11,3.94,4,4.39,4.24,7.17C309.3,278.94,308,281,307.55,281Z"
            transform="translate(-254.35 -226.51)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            id="CHID_DENT_Left_perio_E"
            v-if="selectedTooth.perio.left"
            d="M258.58,283.36c.9-.05.55-1.34,2.41-2.78s4.5-1.65,4.52-2.6c0-.62-1-.74-1.69-1.71a2.56,2.56,0,0,1,0-2.61c.67-1.69.82-3.19,1.13-6.19.38-3.73-.94-3.73,0-6.12.73-1.87,1.94-2.88,1-3.58s-3.33-.76-4.95-.25c-1.78.57-2.56,1.85-3.12,7.58-.71,7.29.38,6.89-.71,9.37-.88,2-2.14,3.51-1.41,5.79C256.25,281.81,257.56,283.41,258.58,283.36Z"
            transform="translate(-254.35 -226.51)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            id="CHID_DENT_Right_perio_E"
            v-if="selectedTooth.perio.right"
            d="M307.55,281c-.34,0-.14-1-1.28-2.12a7.76,7.76,0,0,0-2.54-1.54c-3.12-1.23-6.74-.84-6.8-1.23,0-.23,1.28-.25,2.27-.89a2.27,2.27,0,0,0,1-2.28,10.46,10.46,0,0,0-1.13-4.16c-.78-1.54-1.37-3.74-2.55-8.15-.68-2.52-.5-2.56-1-3.5-.41-.77-.76-1.19-.43-1.39.66-.38,3.64.29,5.38,1.47,2,1.32,1.53,2.72,2,5.46a24,24,0,0,0,2.41,6.68c2.11,3.94,4,4.39,4.24,7.17C309.3,278.94,308,281,307.55,281Z"
            transform="translate(-254.35 -226.51)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
        <g id="CHID_DENT_Implant_E" v-if="selectedTooth.implant">
          <path
            d="M266.61,271.59l33.88,0c1.25,0,2.26.4,2.24.88l-.11,3.47c0,.48-1.05.87-2.3.87l-33.88,0c-1.25,0-2.26-.39-2.24-.88l.11-3.47C264.33,272,265.36,271.59,266.61,271.59Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M283,230.44h4.27c2.23,0,4,.7,4,1.55L290,270.91c0,.86-1.85,1.55-4.07,1.54H281.6c-2.22,0-4-.7-4-1.55L278.9,232C278.93,231.12,280.75,230.43,283,230.44Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.53,263.29l23.18,0c.62,0,1.11.19,1.1.43l0,1.12c0,.24-.52.43-1.13.43l-23.18,0c-.62,0-1.11-.19-1.11-.43l0-1.12C271.41,263.48,271.91,263.29,272.53,263.29Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.35,257.36l23.33,0c.58,0,1,.18,1,.4l0,1.18c0,.22-.48.4-1.06.4l-23.32,0c-.58,0-1-.18-1-.4l0-1.18C271.3,257.54,271.78,257.36,272.35,257.36Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.94,251.43l23.14,0c.63,0,1.13.2,1.12.44l0,1.1c0,.24-.53.44-1.15.44l-23.14,0c-.63,0-1.13-.2-1.13-.44l0-1.1C271.8,251.63,272.31,251.43,272.94,251.43Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.73,245.5l23.36,0c.56,0,1,.18,1,.39l0,1.19c0,.22-.47.39-1,.39l-23.36,0c-.57,0-1-.18-1-.4l0-1.19C271.69,245.68,272.16,245.5,272.73,245.5Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272.89,239.57l23.42,0c.55,0,1,.17,1,.38l0,1.21c0,.21-.46.38-1,.38l-23.26,0c-.63,0-1.14-.21-1.14-.45l0-1.15C271.89,239.74,272.34,239.57,272.89,239.57Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M273.52,233.64l23.15,0c.63,0,1.13.2,1.12.44l0,1.11c0,.24-.52.43-1.14.43l-23.16,0c-.62,0-1.12-.19-1.11-.43l0-1.11C272.38,233.83,272.89,233.64,273.52,233.64Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.84"
            y1="13.17"
            x2="43.03"
            y2="7.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.91"
            y1="14.93"
            x2="43.1"
            y2="8.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.55"
            y1="19.15"
            x2="42.58"
            y2="13.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.63"
            y1="20.82"
            x2="42.56"
            y2="14.96"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.88"
            y1="25.01"
            x2="42.39"
            y2="19.11"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.79"
            y1="26.78"
            x2="42.43"
            y2="20.86"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.22"
            y1="30.98"
            x2="42.57"
            y2="25.09"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.3"
            y1="32.73"
            x2="42.37"
            y2="26.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.41"
            y1="36.9"
            x2="41.99"
            y2="30.97"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.42"
            y1="38.66"
            x2="41.86"
            y2="32.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M298,235.85"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M272,275.77l23.08,0c2.46,0,4.43.77,4.4,1.72l-.14,4.21c0,.94-2.05,1.71-4.51,1.71l-23.08,0c-2.46,0-4.43-.78-4.4-1.72l.14-4.21C267.48,276.53,269.5,275.77,272,275.77Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_E"
           v-if="selectedTooth.periapical.periapical1"
          d="M269.35,245.54c.41,0,.34-1.26.2-3.69-.06-.9-.11-1.81-.3-3.06a18.52,18.52,0,0,0-.89-4.09,24,24,0,0,0-1.08-3.12,1.81,1.81,0,0,1-.2-1.88,1.94,1.94,0,0,1,1.28-.91,4.65,4.65,0,0,1,2.17.17,8.71,8.71,0,0,1,3.06,1.48c2,1.45,3,2.18,3.55,2.61s1.21,1,3.75,3.46c1.85,1.77,2.79,2.67,3.15,3.07,2,2.2,2.51,3.52,3,3.46s.47-1.46.1-2.78-1.14-2.32-4.54-5.9a31.58,31.58,0,0,0-4.14-4,14.1,14.1,0,0,0-5.72-3c-.74-.18-4.57-1.1-7.1-.06-2.27.94-2.22,3-2.17,5a26,26,0,0,0,1.19,4.48,34.72,34.72,0,0,0,1.67,4.88C267.15,243.3,268.69,245.63,269.35,245.54Z"
          transform="translate(-254.35 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <g id="CHID_DENT_Occlusal_Veneer_E">
          <path
            id="CHID_DENT_Occlusal_Veneer_E_2"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M269.28,306.37l-4.39.05a7.07,7.07,0,0,1-4.23.8,4.68,4.68,0,0,1-1.94-.89,3.84,3.84,0,0,1-1.3-1.55,7.87,7.87,0,0,1-.81-3.5,1,1,0,0,1-.08-.58c.23-1.35,3.37-2,3.61-2.08h13.41c2,0,3.61.93,3.61,2.08v4.81A1.55,1.55,0,0,1,276.1,307a6.25,6.25,0,0,1-2.68-.14C272.43,306.7,271,306.52,269.28,306.37Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_E_1"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M301.52,307.87h-5.93c-1.34,0-2.42-.62-2.42-1.39V300c0-.76,1.08-1.39,2.42-1.39h13.09a3.44,3.44,0,0,1,1.28.46,1.16,1.16,0,0,1,.57,1.45l.08,3.09a3.19,3.19,0,0,1-1.79,2.71,9.56,9.56,0,0,1-2.68.93A21.87,21.87,0,0,1,301.52,307.87Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_E_2"
            v-if="selectedTooth.crown.onlay"
            d="M269.28,306.37l-4.39.05a7.07,7.07,0,0,1-4.23.8,4.68,4.68,0,0,1-1.94-.89,3.84,3.84,0,0,1-1.3-1.55,7.87,7.87,0,0,1-.81-3.5,1,1,0,0,1-.08-.58c.23-1.35,3.37-2,3.61-2.08h13.41c2,0,3.61.93,3.61,2.08v4.81A1.55,1.55,0,0,1,276.1,307a6.25,6.25,0,0,1-2.68-.14C272.43,306.7,271,306.52,269.28,306.37Z"
            transform="translate(-254.35 -226.51)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_E_1"
            v-if="selectedTooth.crown.onlay"
            d="M301.52,307.87h-5.93c-1.34,0-2.42-.62-2.42-1.39V300c0-.76,1.08-1.39,2.42-1.39h13.09a3.44,3.44,0,0,1,1.28.46,1.16,1.16,0,0,1,.57,1.45l.08,3.09a3.19,3.19,0,0,1-1.79,2.71,9.56,9.56,0,0,1-2.68.93A21.87,21.87,0,0,1,301.52,307.87Z"
            transform="translate(-254.35 -226.51)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          
        </g>
        <g id="CHID_DENT_Endo_Crown_E">
          <path
            id="CHID_DENT_Endo_Crown_E_2"
            v-if="selectedTooth.endo_crown.crown2"
            d="M269.31,306.25l-4.38,0a7.11,7.11,0,0,1-4.24.8,4.69,4.69,0,0,1-1.93-.89,3.89,3.89,0,0,1-1.3-1.54,7.94,7.94,0,0,1-.82-3.51,1.14,1.14,0,0,1-.08-.58c.23-1.35,3.38-2,3.61-2.08h13.41c2,0,3.61.93,3.61,2.08v4.82a1.52,1.52,0,0,1-1.06,1.46,6.26,6.26,0,0,1-2.68-.14C272.46,306.57,271.06,306.39,269.31,306.25Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
          <path
            id="CHID_DENT_Endo_Crown_E_1"
            v-if="selectedTooth.endo_crown.crown1"
            d="M301.55,307.74h-5.93c-1.33,0-2.41-.62-2.41-1.39v-6.46c0-.77,1.08-1.4,2.41-1.4h13.09A3.44,3.44,0,0,1,310,299a1.16,1.16,0,0,1,.57,1.45l.08,3.09a3.18,3.18,0,0,1-1.78,2.71,9.67,9.67,0,0,1-2.68.93A22,22,0,0,1,301.55,307.74Z"
            transform="translate(-254.35 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.54"
          />
        </g>
      </g>
    </svg>
    <span class="text-center my-3">E</span>
  </div>
</template>
<script>
export default {
    props:["selectedTooth"]
}
</script>
<style  lang="scss" scoped>
.single-tooth{
    width:100% ;
    height:100% ;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      background: $tradmark-color;
      text-align: center;
      width:45px;
      height: 45px;
      font-size: 22px;
      font-weight: 500;
      padding: 10px;
      border-radius: 20px;
      color:#FFF;
      position: absolute;
      line-height: 1.3;
      bottom: -35px;
      left: 40%;
    }
}
</style>