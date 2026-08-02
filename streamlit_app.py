import os
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Sindiri Arayan | Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

st.markdown('''
<style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    .block-container {
        padding: 0rem !important;
        margin: 0rem !important;
        max-width: 100% !important;
    }
    iframe {
        width: 100% !important;
        border: none !important;
    }
    [data-testid="stAppViewContainer"] {
        background-color: #07090e;
    }
</style>
''', unsafe_allow_html=True)

html_path = os.path.join(os.path.dirname(__file__), "standalone.html")

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=4500, scrolling=True)
else:
    st.error("Portfolio HTML bundle not found.")
